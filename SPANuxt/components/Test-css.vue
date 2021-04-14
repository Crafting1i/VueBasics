<template>
    <div>
        <div class="container">
            <div class="box">
                <span></span>
                <div class="content">
                    <h2>Card 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis doloremque mollitia modi.
                        Animi eius nisi beatae dignissimos excepturi, ab quae voluptate corrupti deserunt, dicta, iste blanditiis!
                        Accusamus numquam modi et.
                    </p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="box">
                <span></span>
                <div class="content">
                    <h2>Card 2</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis doloremque mollitia modi.
                        Animi eius nisi beatae dignissimos excepturi, ab quae voluptate corrupti deserunt, dicta, iste blanditiis!
                        Accusamus numquam modi et.
                    </p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="box">
                <span></span>
                <div class="content">
                    <h2>Card 3</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis doloremque mollitia modi.
                        Animi eius nisi beatae dignissimos excepturi, ab quae voluptate corrupti deserunt, dicta, iste blanditiis!
                        Accusamus numquam modi et.
                    </p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="box">
                <span></span>
                <div class="content">
                    <h2>Card 4</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis doloremque mollitia modi.
                        Animi eius nisi beatae dignissimos excepturi, ab quae voluptate corrupti deserunt, dicta, iste blanditiis!
                        Accusamus numquam modi et.
                    </p>
                    <a href="#">Read more</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
}
</script>

<style>
* {
    font-family: Inter,Roboto,Oxygen,Fira Sans,Helvetica Neue,sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    background: #111;
}
body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #03a9f4, #ff0058);
    clip-path: circle(18.5% at right 90%);
}
body::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #2196f3, #e91e63);
    clip-path: circle(13% at 5% 10%);
}
.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    flex-wrap: wrap;
}
.container .box {
    width: 320px;
    height: 400px;
    color: white;
    position: relative;
    background: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 30px;
    transition: .5s;
}
.container .box:first-child:hover {
    transform: translate(-20px, -20px);
}
.container .box:last-child:hover {
    transform: translate(20px, -20px);
}
.container .box:hover {
    transform: translate(0, -20px);
}
.container .box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ffbc00, #ff0058);
}
.container .box::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ffbc00, #ff0058);
    filter: blur(30px);
}
.container .box:nth-child(2):before,
.container .box:nth-child(2):after {
    background: linear-gradient(315deg, #03a9f4, #ff0058);
}
.container .box:nth-child(3):before,
.container .box:nth-child(3):after {
    background: linear-gradient(315deg, #4dff03, #00d0ff);
}
.container .box span {
    position: absolute;
    top: 6px;
    left: 6px;
    bottom: 6px;
    right: 6px;
    background: rgba(0,0,0, 0.6);
    z-index: 2;
}
.container .box span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.15);
    pointer-events: none;
}
.container .box .content {
    position: relative;
    z-index: 10;
    padding: 20px 40px;
}
.container .box .content h2 {
    font-size: 2em;
    color: #fff;
    margin-bottom: 10px;
}
.container .box .content p {
    font-size: 1em;
    color: #fff;
    margin-bottom: 10px;
    line-height: 1.4em;
}
.container .box .content a {
    display: inline-block;
    font-size: 1.1em;
    color: #111;
    background: #fff;
    padding: 10px;
    text-decoration: none;
    font-weight: 700;
}
</style>