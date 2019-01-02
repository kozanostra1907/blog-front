import React, {Component, Fragment} from 'react';


class About extends Component{

    render(){
        return(
            <Fragment>
				<div className='about-main clearfix'>
                    <div className='about-top'>
                        <h2 className='title clearfix'>
                            关于我
                            <span className='desc f-r'>你若盛开，清风自来</span>
                        </h2>
                        <div className='about-container clearfix'>
                            <div className='about-desc f-l'>
                                <p>24岁，男，LOL骨灰级玩家，段位最高是砖石5，区组艾欧尼亚，PS：我有龙瞎（系统免费送的，不服来刚）。</p>
                                <p>2016年毕业于安徽师范大学皖江学院，计算机科学与技术专业。大学期间打过工，做过流水线，发过传单，做过华尔街英语电话客服，都‘颇’有成就。</p>
                                <p>2015年实习于杭州臻诚网络，打了6个月酱油，写过一丢丢java。2016年来到上海，入职琢本网络至今，任Web前端开发工程师。</p>
                                <p>大学室友们都去做了java服务层，我真是个奇葩。</p>
                                <p>工作这几年，主要是前端方向，mootools.js到jquery，angular1.x到angular4.x+，gulp、grunt到webpack，vue1.x到2.x，react^15到目前用的react^16+nextjs，nodejs（express，koa）只是CURD级别。</p>
                                <p><a href="https://github.com/shaotianyu" target='_blank'>Github：https://github.com/shaotianyu</a>(N年写的几个js小插件)</p>
                                <p><a href="https://blog.csdn.net/qq_35087256" target='_blank'>CSDN：https://blog.csdn.net/qq_35087256</a></p>
                                <p>看过的书：《javascript从入门到精通》，《javascript高级程序设计》(二进宫),《ES6标准入门》，《深入理解ES6》。</p>
                                <p>本站用的一些基础技术栈：React+NextJs+Redux(我也很想知道为什么没用Mobx)实现的SSR。UI层面用的antd。</p>
                                <p>还有博客相对应的一个后台管理系统，也是基本的React、Redux，各种子级路由嵌套，然后劈里啪啦地进行增删改查。</p>
                                <p>博客的服务端用的是Express、Mongoose。</p>
                                <p>我真的忘记做响应式布局了，所以本站暂不支持Wap预览，后面会做出布局调整。</p>
                                <p>That's all，thank you！</p>
                            </div>
                            <div className='about-side f-r'>
                                <h1 className="a-title">个人信息</h1>
                                <img src="/static/avator.jpg" alt="邵天宇的头像" className='about-pic'/>
                                <div className='about-msg'>
                                    <p>姓名：Soy&nbsp;|&nbsp;邵天宇</p>
                                    <p>职业：Web前端开发</p>
                                    <p>QQ：840812407</p>
                                    <p>邮箱：shaotianyu6@foxmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
             </Fragment>
        )
    }
}


export default About