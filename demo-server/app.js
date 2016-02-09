/*global document:false*/
"use strict";
const React = require("react");
const Resolver = require("react-resolver").Resolver;
const Router = require("react-router").Router;
const createHistory = require("history").createHistory;

const routes = require("./client-routes");

const content = document.querySelector(".js-content");

Resolver.render(() => {
  return React.createElement(
    Router,
    { history: createHistory() },
    routes
  );
}, content);
