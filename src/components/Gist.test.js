import { render } from '@testing-library/react';
import React from 'react';
 import Gist from './Gist';
 import {formatDate} from './Gist';
describe("Gist Component", () => {
    const gistData = {
        "url": "https://api.github.com/gists/f2844d77d44c6203622f8192b20983d9",
        "forks_url": "https://api.github.com/gists/f2844d77d44c6203622f8192b20983d9/forks",
        "commits_url": "https://api.github.com/gists/f2844d77d44c6203622f8192b20983d9/commits",
        "id": "f2844d77d44c6203622f8192b20983d9",
        "node_id": "MDQ6R2lzdGYyODQ0ZDc3ZDQ0YzYyMDM2MjJmODE5MmIyMDk4M2Q5",
        "git_pull_url": "https://gist.github.com/f2844d77d44c6203622f8192b20983d9.git",
        "git_push_url": "https://gist.github.com/f2844d77d44c6203622f8192b20983d9.git",
        "html_url": "https://gist.github.com/f2844d77d44c6203622f8192b20983d9",
        "files": {
          "AppStoreLinks.md": {
            "filename": "AppStoreLinks.md",
            "type": "text/markdown",
            "language": "Markdown",
            "raw_url": "https://gist.githubusercontent.com/st3fan/f2844d77d44c6203622f8192b20983d9/raw/fcd0830e5276952da78867a8a43e39d1367a1340/AppStoreLinks.md",
            "size": 211
          }
        },
        "public": true,
        "created_at": "2021-06-03T23:32:41Z",
        "updated_at": "2021-06-03T23:32:41Z",
        "description": "",
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/f2844d77d44c6203622f8192b20983d9/comments",
        "owner": {
          "login": "st3fan",
          "id": 28052,
          "node_id": "MDQ6VXNlcjI4MDUy",
          "avatar_url": "https://avatars.githubusercontent.com/u/28052?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/st3fan",
          "html_url": "https://github.com/st3fan",
          "followers_url": "https://api.github.com/users/st3fan/followers",
          "following_url": "https://api.github.com/users/st3fan/following{/other_user}",
          "gists_url": "https://api.github.com/users/st3fan/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/st3fan/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/st3fan/subscriptions",
          "organizations_url": "https://api.github.com/users/st3fan/orgs",
          "repos_url": "https://api.github.com/users/st3fan/repos",
          "events_url": "https://api.github.com/users/st3fan/events{/privacy}",
          "received_events_url": "https://api.github.com/users/st3fan/received_events",
          "type": "User",
          "site_admin": false
        },
        "truncated": false
      };
    it('should render correctly', () => {
        const {container} = render
          (<Gist gist={gistData}></Gist>)
        expect(container).toMatchSnapshot();
      });

      describe("formatDate()", ()=> {
          it('should format date to mm/dd/yyyy', () => {
            expect(formatDate("2021-06-04T03:10:05.666Z")).toEqual("6/4/2021");
          });
      })
})
