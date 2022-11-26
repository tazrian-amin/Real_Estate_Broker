import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='grid grid-cols-1 bg-slate-500'>
            <div className="card bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h1 className="card-title text-2xl mb-5"># What is the difference between SQL & NoSQL?</h1>
                    <p className="font-semibold text-justify">
                        <span className='font-bolder bg-slate-300 px-2 py-1 rounded'>SQL</span> : SQL databases are primarily called as Relational Databases (RDBMS). These databases defines and manipulates data based on structured query language (SQL). These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage. These databases are best suited for complex queries. They are 'Vertically' Scalable. They follows ACID property. <br />
                        <br />
                        <span className='font-bolder bg-slate-300 px-2 py-1 rounded'>Examples</span> : MySQL, PostgreSQL, Oracle, MS-SQL Server, etc.
                    </p>
                    <div className="divider"></div>
                    <p className="font-semibold text-justify">
                        <span className='font-bolder bg-slate-300 px-2 py-1 rounded'>NoSQL</span> : NoSQL database are primarily called as non-relational or distributed database. They have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. They are 'Horizontally' scalable. They follows CAP(consistency, availability, partition tolerance) property. <br />
                        <br />
                        <span className='font-bolder bg-slate-300 px-2 py-1 rounded'>Examples</span> : MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h1 className="card-title text-2xl mb-5"># What is the difference between Javascript & Node.js?</h1>
                    <p className="font-semibold text-justify">
                        <span className='font-bolder bg-slate-300 px-2 py-1 rounded'>Javscript</span> : Javascript is a programming language that is used for writing scripts on the website. It can only be run in the browsers. It is basically used on the client-side. It is capable enough to add HTML and play with the DOM. It can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Javascript is used in frontend development. Some of the javascript frameworks are RamdaJS, TypedJS, etc. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                    </p>
                    <div className="divider"></div>
                    <p className="font-semibold text-justify">
                        <span className='font-bolder bg-slate-300 px-2 py-1 rounded'>Node.js</span> : NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. It does not have capability to add HTML tags. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. Nodejs is written in C, C++ and Javascript.
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h1 className="card-title text-2xl mb-5"># What is JWT, and how does it work?</h1>
                    <p className="font-semibold text-justify">
                        <span className='font-bolder bg-slate-300 px-2 py-1 rounded'>JWT</span> : JSON web token(JWT) is a JSON Object which is used to securely transfer information over the web (between two parties). It can be used for an authentication system and can also be used for information exchange.
                    </p>
                    <div className="divider"></div>
                    <p className="font-semibold text-justify">
                        <span className='font-bolder bg-slate-300 px-2 py-1 rounded'>Functionality</span> : JWT token is mainly composed of header, payload, and signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token. <br />
                        In the deserialized form, it contains only the header and the payload. Both of them are plain JSON objects. A header in a JWT is mostly used to describe the cryptographic operations applied to the JWT like signing/decryption technique used on it. It can also contain the data about the media/content type of the information we are sending.This information is present as a JSON object then this JSON object is encoded to BASE64URL. The cryptographic operations in the header define whether the JWT is signed/unsigned or encrypted and are so then what algorithm techniques to use. <br />
                        The payload is the part of the JWT where all the user data is actually added. This data is also referred to as the ‘claims’ of the JWT.This information is readable by anyone so it is always advised to not put any confidential information in here. This part generally contains user information. This information is present as a JSON object then this JSON object is encoded to BASE64URL. We can put as many claims as we want inside a payload, though unlike header, no claims are mandatory in a payload. <br />
                        is the third part of JWT and used to verify the authenticity of token. BASE64URL encoded header and payload are joined together with dot(.) and it is then hashed using the hashing algorithm defined in a header with a secret key. This signature is then appended to header and payload using dot(.) which forms our actual token <i>header.payload.signature</i> .
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h1 className="card-title text-2xl mb-5"># How does NodeJS handle multiple requests at the same time?</h1>
                    <p className="font-semibold text-justify">
                        <span className='font-bolder bg-slate-300 px-2 py-1 rounded'>Handling Multiple Requests</span> : We know NodeJS application is single-threaded. But the fact is, NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. <br />
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking, then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;