---
title: New Post.
date: 2017-02-22T00:00:00.000Z
layout: Post
cover: /assets/Content Manager.png
---
This is a new post post!

Code is highlighted by default.

    const StatelessComponent = (props) => {
      return (
        <div>
          I‘m a stateless component that accepts children
          { props.children }
        </div>
      )
    }
    
    // ...
    
      return (
        <StatelessComponent>
          Example of child
        </StatelessComponent>
      )
