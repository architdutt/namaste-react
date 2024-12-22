import React from "react";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "architdutt",
        id: 22239261,
        node_id: "MDQ6VXNlcjIyMjM5MjYx",
        avatar_url: "https://avatars.githubusercontent.com/u/22239261?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/architdutt",
        html_url: "https://github.com/architdutt",
        followers_url: "https://api.github.com/users/architdutt/followers",
        following_url:
          "https://api.github.com/users/architdutt/following{/other_user}",
        gists_url: "https://api.github.com/users/architdutt/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/architdutt/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/architdutt/subscriptions",
        organizations_url: "https://api.github.com/users/architdutt/orgs",
        repos_url: "https://api.github.com/users/architdutt/repos",
        events_url: "https://api.github.com/users/architdutt/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/architdutt/received_events",
        type: "User",
        user_view_type: "public",
        site_admin: false,
        name: null,
        company: "Quinnox",
        blog: "",
        location: "Bangalore",
        email: null,
        hireable: null,
        bio: "I am a full-stack developer at Quinnox and located in Bangalore.",
        twitter_username: "DuttArchit",
        public_repos: 11,
        public_gists: 0,
        followers: 1,
        following: 2,
        created_at: "2016-09-16T14:03:01Z",
        updated_at: "2024-12-22T08:40:08Z",
      },
    };
    console.log("UserClass constructor");
  }

  async componentDidMount() {
    console.log("UserClass componentDidMount");
    const data = await fetch("https://api.github.com/users/architdutt");
    const userData = await data.json();
    this.setState({ userInfo: userData });
  }

  componentDidUpdate() {
    console.log("UserClass componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("UserClass componentWillUnmount");
  }

  render() {
    console.log("UserClass render");
    const { userInfo } = this.state;
    return (
      <>
        <div>User Class component</div>
        <img
          style={{ height: "40px", width: "40px" }}
          src={userInfo.avatar_url}
          alt=""
        />
        <div>{userInfo.login}</div>
        <div>{userInfo.location}</div>
        <div>{userInfo.email}</div>
        <div>{userInfo.bio}</div>
      </>
    );
  }
}
