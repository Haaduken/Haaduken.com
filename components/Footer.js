import { Business, Code, Email, GitHub, LinkedIn } from "@material-ui/icons";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import React, { Component } from "react";

import ReactDOM from "react-dom";
import { requirePropFactory } from "@material-ui/core";

// class Footer extends React.Component{
//     componentDidMount () {
//         const script = document.createElement("script");
//
//         script.async = true;
//         document.body.appendChild(script);
//         return (
//             <div className="App" ref={el => (this.div = el)}>        <h1>Hello react</h1>
//               {/* Script is inserted here */}
//             </div>
//           );
//     }
// }

const Footer = () => (
  <Flex justify="center">
    {/* <script src="lib/getGitInfo.js"></script> */}
    <div id="gitTime"></div>
    <Link href="https://github.com/Haaduken" title="GitHub" isExternal>
      <IconButton
        aria-label="Github"
        size="lg"
        color="gray.500"
        variant="ghost"
      >
        <GitHub fontSize="small" />
      </IconButton>
    </Link>
    <Link
      href="https://www.linkedin.com/in/haadi-m-19869712a/"
      title="LinkedIn"
      isExternal
    >
      <IconButton
        aria-label="LinkedIn"
        size="lg"
        color="gray.500"
        variant="ghost"
      >
        <LinkedIn fontSize="small" />
      </IconButton>
    </Link>
    <Link href="mailto:haadi.majeed99@gmail.com" title="Email" isExternal>
      <IconButton aria-label="Email" size="lg" color="gray.500" variant="ghost">
        <Email fontSize="small" />
      </IconButton>
    </Link>
  </Flex>
);

export default Footer;
