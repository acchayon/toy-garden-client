import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p><strong>Access Token:</strong> An Access Token is like that a key who allows us some special information in a system.
                        It is credential  that is used to authenticate and authorize access to protected some information. Access token is included api requests and it validate user's identity and permission to check information.
                        <br />
                        <strong>Refresh Token: </strong> A refresh token is a special key that can be used get a new acces token. When access token get expire, and want to new one, then we use refresh token.And this whyyou don't have login again.
                        <br />
                        <strong>How do they work? </strong>
                        Access tokens are used to authenticate and authorize requests to protected resources, while refresh tokens allow for obtaining new access tokens when the old ones expire, providing a seamless user experience without constant re-authentication. When a user logs into a system or grants permission to an application, the authentication server verifies their credentials. If successful, the server generates an access token and a refresh token.The user includes the access token in each request to the system's protected resources, typically by including it in the request headers. This token serves as proof of their identity and authorization to access specific resources or perform certain actions.
                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>
                        <strong>SQL </strong> means Structured Query Language. And <strong>NoSQL </strong> means Not only sql.
                        Here is the different between us: <br />
                        SQL: SQL databases store data in structured tables with fixed schemas.
                        NoSQL: NoSQL databases store data in flexible formats like key-value pairs, documents, or graphs.
                        <br />
                        SQL: SQL databases typically scale vertically by adding more resources to a single server.
                        NoSQL: NoSQL databases are designed to scale horizontally by adding more servers to distribute the load.
                        <br />
                        SQL: SQL databases use SQL (Structured Query Language) for querying and manipulating data.
                        NoSQL: NoSQL databases use a variety of query languages specific to their data model.
                        <br />
                        SQL: SQL databases prioritize ACID compliance, ensuring transactional consistency and data integrity.
                        NoSQL: NoSQL databases may prioritize scalability and performance over strict ACID compliance.
                        <br />
                        These simplified differences provide a high-level overview, but keep in mind that actual databases within the SQL and NoSQL categories can have specific features and variations.
                    </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3. What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>
                        <strong>What is express js? : </strong>
                        <strong>Express JS</strong> is a populer web application framework for Node js. Express js is run on node js. When we wnat to create a simple web server then then we need express js. Express.js provides a straightforward and intuitive way to define routes, handle HTTP requests, and build more complex web applications or APIs. This example demonstrates the basic usage of Express.js to create a simple server, but it can be extended with additional routes, middleware, and functionality as needed for your application.
                        <br />
                        <strong>What is Nest Js? </strong>
                        <br />
                        Nest js is a typescript based web application framework of javascript.It is inspired by angular's architechture. NestJS is a web application framework for building server-side applications. It's written in TypeScript, which is a language that helps write better JavaScript code. NestJS makes it easier to create scalable and efficient servers. It uses decorators to define routes and components, and it works well with popular frameworks like Express.js. NestJS also supports features like WebSockets for real-time communication and has built-in testing capabilities. Overall, NestJS is a great choice for building robust and maintainable server-side applications.
                    </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4. What is MongoDB aggregate and how does it work (google it)?
                </div>
                <div className="collapse-content">
                    <p>
                    MongoDB's aggregate function is used to perform advanced data processing and analysis on collections. It allows you to specify a sequence of operations called stages to transform and analyze data.you can use aggregate to find the average age of users in a collection, group data by a specific field, calculate totals, or perform other complex operations on your data. The aggregate function in MongoDB helps you perform data analysis by processing and transforming documents using a series of stages in a pipeline.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;