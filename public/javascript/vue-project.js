const ProjectCard = {
  template: '#project-card-template',
  props: ['project']
}

const app = new Vue({
  el: '#app',
  components: {
    'project-card': ProjectCard
  },
  data() {
    return {
      projects: null
    }
  },
  created() {
    axios.get('/projects')
      .then(response => {
        let projects = response.data
        let colors = [ 'bg-danger', 'bg-success', 'bg-primary', 'bg-dark', 'bg-warning', 'bg-secondary' ]

        for (let i = colors.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [colors[i], colors[j]] = [colors[j], colors[i]];
      }

        i = 0
        projects.forEach(project => {
          if(i > 5) {
            i = 0
          }
          let color = colors[i]
          project.color = color
          i++
        });
        this.projects = projects
      })
  }

})

