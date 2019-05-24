export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce7430a94bd8a4bcf95ba32',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-aw93o9ee',
                  apiId: '108c9cf8-3072-417c-b3c5-f3038f8aeda0'
                },
                {
                  buildHookId: '5ce7430a29b1b450586ee817',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p23cj7of',
                  apiId: 'a52e3d6e-318e-4825-9486-63101cb41352'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoeyDye/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-p23cj7of.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
