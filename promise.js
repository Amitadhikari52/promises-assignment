function createPost(post) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            const newPost = { id: Math.random().toString(), content: post };
            resolve(newPost);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            const lastActivityTime = new Date().toISOString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost(postId) {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous operation with setTimeout
        setTimeout(() => {
            // Perform deletion logic here...
            const isDeleted = true; // Placeholder value
            if (isDeleted) {
                resolve();
            } else {
                reject(new Error("Failed to delete post."));
            }
        }, 1000);
    });
}

// Usage example
const posts = [];
let lastActivityTime = null;

createPost("First post")
    .then((post) => {
        posts.push(post);
        return updateLastUserActivityTime();
    })
    .then((activityTime) => {
        lastActivityTime = activityTime;
        console.log("Posts:", posts);
        console.log("Last activity time:", lastActivityTime);
        return deletePost(posts[posts.length - 1].id);
    })
    .then(() => {
        posts.pop();
        console.log("New set of posts:", posts);
    })
    .catch((error) => {
        console.error(error);
    });