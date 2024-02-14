import React, { useEffect, useState } from 'react'
import "../CSS/Platforms2.css"

const Platforms2 = () => {


    const [platform, SetPlatform] = useState("")
    const [sub_active,Set_sub_active] = useState(true)
    const [pro_active,Set_pro_active] = useState(false)
    const [c_pro_active,Set_c_pro_active] = useState(false)


    useEffect(() => {
        var url = window.location.pathname;
        console.log(url);debugger
        var last_index = url.lastIndexOf("/");
        url = url.slice(last_index, url.length)
        url = url.slice(1);
        console.log(url);

        SetPlatform(url)

    }, [])

    useEffect(()=>{console.log(platform);},[platform])

    const change_links = (e)=>{
        document.querySelectorAll(".row").forEach(i=>{
            if(i.classList.contains("active")){
                i.classList.remove("active")
            }
        })

        if(e.target.id==="sub" || e.target.parentElement.id==="sub"){
            Set_sub_active(true)
            Set_pro_active(false)
            Set_c_pro_active(false)
        }else if(e.target.id==="pro" || e.target.parentElement.id==="pro"){
            Set_sub_active(false)
            Set_pro_active(true)
            Set_c_pro_active(false)
        }else if(e.target.id==="c_pro"|| e.target.parentElement.id==="c_pro"){
            Set_sub_active(false)
            Set_pro_active(false)
            Set_c_pro_active(true)
        }

        e.target.classList.add("active")

    }

    return (
        <section className='section_paltforms_panel'>
            <aside>
                <div>
                    <div onClick={change_links} id='sub' className="row active"><p>Subscription</p>

                        <i className="fa fa-lock" aria-hidden="true"></i></div>
                    <div id='pro' onClick={change_links} className="row"><p>Proposal</p> <i className="fa fa-handshake" aria-hidden="true"></i></div>
                    <div id="c_pro" onClick={change_links} className="row"><p>Create Propasal </p><i className="fa fa-plus" aria-hidden="true"></i></div>
                </div>
            </aside>
            <div className="container">
                {sub_active && <div className="sub_part">
                    <div className='sub_part_x'>
                        <div className='left_p'>
                            <div className="logo"><i className={platform === "x" ? `fa-brands fa-x-twitter` : `fa-brands fa-${platform}`}></i></div>
                            <div className="platform_name">{platform!==""?platform[0].toUpperCase() +
                                platform.slice(1):""}
                            </div>
                        </div>
                        <div className="sub_btn">
                            <p>Subscribe</p> 14.84 $
                        </div>
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore, perspiciatis eligendi corporis deleniti fugiat consequatur sapiente eveniet praesentium possimus, recusandae error nam rem numquam. Consequatur eos odit accusamus qui.
                        Nulla dolores consequuntur aperiam ducimus, magni itaque! Enim tempora, earum iure molestiae ex, eveniet corporis quod fuga officiis, velit incidunt consequatur fugiat repudiandae magnam possimus reiciendis ducimus neque aliquid aliquam!
                        Quo a cum fuga ipsam, ex aliquam atque, voluptates expedita mollitia nesciunt repellat ipsum nemo voluptatum quam exercitationem esse corporis qui illum eius. Tenetur sapiente quae est illo ratione voluptatibus.
                        Eligendi earum expedita est nihil nulla! Provident voluptas beatae amet illo reprehenderit animi suscipit harum voluptate magni repellendus. Beatae optio, itaque consequatur numquam iste at qui totam veniam expedita excepturi?
                        Ad dolorum fugit, cupiditate minus a tempore vero veritatis, blanditiis quaerat praesentium soluta nam vel distinctio laudantium autem tenetur eius provident incidunt. Ab voluptatum quos eligendi enim repudiandae fuga inventore?
                        Incidunt ut eveniet sequi alias dicta. Necessitatibus molestias quas et ipsam dolorem esse reprehenderit aperiam deleniti sed! Dolores nobis pariatur id at dicta dolor deserunt, quae itaque. Consequuntur, pariatur beatae.
                        Corrupti voluptatem sit delectus error velit excepturi ex! Rerum incidunt aliquid voluptas nisi, magni ipsam saepe ullam beatae animi consectetur. In cum, nihil porro ipsam maxime dignissimos quod culpa soluta.
                       
                    </div>

                </div>}
            </div>
        </section>
    )
}

export default Platforms2