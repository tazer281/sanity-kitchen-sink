export default {
  widgets: [
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
                  buildHookId: '5f52cabf045c2c43fca94c2e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-56n89x7o',
                  apiId: 'a0254202-6383-46dd-80ec-6d80f5a9bb46'
                },
                {
                  buildHookId: '5f52cabf1879975081de229d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xc5jnnmu',
                  apiId: '9ad2e197-79ca-4889-a9dc-6685766e5a51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tazer281/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xc5jnnmu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
