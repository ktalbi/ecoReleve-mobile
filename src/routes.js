import Vue from 'vue'
var Tmp = Vue.component('projects', {
    template: '<f7-page name="login">...</f7-page>'
})

export default [

  {
    path: '/project/:id/',
    component: require('./pages/projects/project.vue'),
    tabs: [
      {
        path: '/',
        tabId: 'observations',
        component: require('./pages/project/observations.vue')
      },
      {
        path: '/stations/',
        tabId: 'stations',
        component: require('./pages/project/stations.vue')
      }
    ]
  },  

  {
    path: '/observations/:id/',
    component: require('./pages/observations/observation.vue'),
  },

  {
    path: '/projects/',
    component: require('./pages/projects/projects.vue'),
    tabs: [
      {
        path: '/',
        tabId: 'myProjects',
        component: require('./pages/projects/my.projects.vue')
      },
      {
        path: '/all-projects/',
        tabId: 'allProjects',
        component: require('./pages/projects/all.projects.vue')
      }
    ], childrens: [
    ]                                
  },

]