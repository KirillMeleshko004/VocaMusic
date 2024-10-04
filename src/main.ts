import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// async function Test() {
//   let res = await fetch(
//     'https://vocadb.net/api/songs?childTags=false&unifyTypesAndTags=false&childVoicebanks=false&includeMembers=false&onlyWithPvs=false&start=0&maxResults=10&getTotalCount=false&preferAccurateMatches=false',
//     {
//       method: 'GET',
//     }
//   );

//   let final = await res.json();
//   console.log(final);
// }
// Test();
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
