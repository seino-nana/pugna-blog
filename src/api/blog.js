import { request } from "./request";

export function getCategory() {
    return request({
        url: '/blog',
        method: 'GET'
    });
}
export function getTools(category) {
  return request({
    url:'/blog/tools',
    method: 'GET',
    params:{
      category
    }
  })
}

export function addTools(data) {
  return request({
    url:'/blog/tools/add',
    method:'GET',
    params:{
      ...data
    }
  })
}

export function getArticle(){
  return request({
    url:'/blog/article',
    method:'GET'
  })
}
export function getArticleCate(){
  return request({
    url:'/blog/article/cate',
    method:'GET'
  })
}
export function addArticle(data){
  return request({
    url:'/blog/article/add',
    method:'GET',
    params:{
      ...data
    }
  })
}
export function getArticleText(id){
  return request({
    url:`/blog/article/text/${id}`,
    method:'POST'
  })
}
export function uploadArticle(){
  return request({
    url:'/upload/article',
    method:'POST'
  })
}