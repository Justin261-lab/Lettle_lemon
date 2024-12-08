import React from "react";

const navdata = [ {
    name: 'Home',
    link: 'www.baidu.com'
},{name: 'About',
    link: 'www.baidu.com'}]

    export default function Nav(){
    return(
        <div>
            <img src="/Users/didi/Desktop/项目/name-of-the-app/icons_assets/Logo.svg" alt="LOGO"/>
            <ul>
                {navdata.map((data,index)=>(
                    <li key={index}>
                        <a href={data.link}>{data.name}</a>
                    </li>
                ))}
            </ul>
            
        </div>
        
       
    )
}
