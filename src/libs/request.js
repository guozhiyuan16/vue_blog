import axios from 'axios';
import store from '../store';
import {getLocal} from '../libs/local'
class AjaxRequest{
    constructor(){ // 配置基本参数
        this.baseURL = process.NODE_ENV === 'production'?'/':'http://localhost:3000'
        this.timeout = 3000;
        this.queue = {};
    }
    merge(options){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    setIntercpetor(instance,url){
        // 请求前 执行此方法
        instance.interceptors.request.use(config=>{
            config.headers.authorization = getLocal('token');
            if(Object.keys(this.queue).length === 0){
                store.commit('show_loading')
            }
            this.queue[url] = url;
            return config;
        });
        // 请求后执行此方法
        instance.interceptors.response.use(res=>{
            store.commit('hide_loading')
            delete this.queue[url];
            if( Object.keys(this.queue).length === 0){
                store.commit('hide_loading')
            }
            return res.data;
        });
    }
    request(options){
        let instance = axios.create();
        let config = this.merge(options);
        this.setIntercpetor(instance,options.url);
        return instance(config); // axios();
    }
}
export default new AjaxRequest();
