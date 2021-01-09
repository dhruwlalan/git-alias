export default [
   {
      cat: 'basic',
      alias: 'st',
      syntax: 'git st',
      commands: [
         {
            syntax: 'git status',
            disc: '',
         },
      ],
      title: 'status of repo',
      desc: '',
   },
   {
      cat: 'basic',
      alias: 'ad',
      syntax: 'git ad',
      commands: [
         {
            syntax: 'git add <file_name>',
            disc: '',
         },
      ],
      title: 'add files to the staging area',
      desc: '',
   },
   {
      cat: '',
      alias: '',
      syntax: 'git',
      command: [
         {
            syntax: '',
            disc: '',
         },
      ],
      title: '',
      desc: '',
   },
];
