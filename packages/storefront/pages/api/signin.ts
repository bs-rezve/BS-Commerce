import axios from "axios";
var cookie = require("cookie");
var escapeHtml = require("escape-html");
var http = require("http");
var url = require("url");

export default async function handler(req, res) {
    const token = await fetch("http://localhost:3000/api/customer/auth/sign-in", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await token.json()
    
    res.setHeader('Set-Cookie',
                cookie.serialize('token', data.data.token,
                {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 7,
                    sameSite: 'strict',
                    path: '/'
                }))
    res.json(data)

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;      
}