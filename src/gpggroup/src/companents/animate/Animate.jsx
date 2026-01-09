// import React, { useEffect, useRef, useState } from 'react'
// import img from "../../assets/animate/atlant.webp"
// import img1 from "../../assets/animate/oil2.webp"
// import img2 from "../../assets/animate/dot4.webp"
// import img3 from "../../assets/animate/kitami.webp"
// import img4 from "../../assets/animate/oil.webp"
// import img5 from "../../assets/animate/winner.webp"
// import img6 from "../../assets/animate/yumiko.webp"
// import video from "../../assets/video/bg2.mp4"

// import "./animate.scss"

// const Animate = () => {
//     const sectionRef = useRef(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setActive(entry.isIntersecting)
//             },
//             { threshold: 0.5 }
//         )

//         if (sectionRef.current) observer.observe(sectionRef.current)

//         return () => observer.disconnect()
//     }, [])

//     return (
//         <div
//             ref={sectionRef}
//             className={`animate-section ${active ? "active" : ""}`}>

//             <video className="animate-section-video" autoPlay loop muted playsInline>
//                 <source src={video} type="video/mp4" />
//             </video>

//             <div className="animate-section-overlay"></div>

//             <img className="animate-section-img left-img-two left" src={img1} />
//             <img className="animate-section-img left-img-one left" src={img4} />

//             <img className="animate-section-img center-img center" src={img5} />

//             <img className="animate-section-img right-img-three right" src={img} />
//             <img className="animate-section-img right-img-two right" src={img6} />
//         </div>
//     )
// }

// export default Animate

// import React, { useEffect, useRef, useState } from 'react'
// import { IoWaterSharp } from 'react-icons/io5'
// import img from "../../assets/animate/atlant.webp"
// import img1 from "../../assets/animate/oil2.webp"
// import img2 from "../../assets/animate/dot4.webp"
// import img3 from "../../assets/animate/kitami.webp"
// import img4 from "../../assets/animate/oil.webp"
// import img5 from "../../assets/animate/winner.webp"
// import img6 from "../../assets/animate/yumiko.webp"

// import "./animate.scss"

// const Animate = () => {
//     const sectionRef = useRef(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setActive(entry.isIntersecting)
//             },
//             { threshold: 0.5 }
//         )

//         if (sectionRef.current) observer.observe(sectionRef.current)

//         return () => observer.disconnect()
//     }, [])

//     return (
//         <div
//             ref={sectionRef}
//             className={`animate-section ${active ? "active" : ""}`}>

//             {/* Animated Background */}
//             <div className="animate-bg">
//                 <div className="floating-orb orb-1"></div>
//                 <div className="floating-orb orb-2"></div>
//                 <div className="floating-orb orb-3"></div>

//                 <div className="grid-pattern"></div>

//                 <svg className="animated-lines">
//                     <defs>
//                         <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                             <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.4" />
//                             <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.4" />
//                         </linearGradient>
//                     </defs>
//                     <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" />
//                     <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" />
//                     <circle cx="50%" cy="50%" r="200" fill="none" stroke="url(#lineGradient)" strokeWidth="1" className="pulse-ring" />
//                 </svg>

//                 {[...Array(30)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="oil-drop"
//                         style={{
//                             left: `${Math.random() * 100}%`,
//                             animationDelay: `${Math.random() * 5}s`,
//                             animationDuration: `${3 + Math.random() * 2}s`
//                         }}
//                     >
//                         <IoWaterSharp />
//                     </div>
//                 ))}
//             </div>

//             {/* Images */}
//             <img className="animate-section-img left-img-two left" src={img1} alt="Character" />
//             <img className="animate-section-img left-img-one left" src={img4} alt="Character" />
//             <img className="animate-section-img center-img center" src={img5} alt="Character" />
//             <img className="animate-section-img right-img-three right" src={img} alt="Character" />
//             <img className="animate-section-img right-img-two right" src={img6} alt="Character" />
//         </div>
//     )
// }

// export default Animate

import React, { useEffect, useRef, useState } from 'react'
import img from "../../assets/animate/atlant.webp"
import img1 from "../../assets/animate/oil2.webp"
import img2 from "../../assets/animate/cool.webp"
import img3 from "../../assets/animate/oil3.webp"
import img4 from "../../assets/animate/oil.webp"
import img5 from "../../assets/animate/winner.webp"
import img6 from "../../assets/animate/yumiko.webp"
import video from "../../assets/video/bg2.mp4"

import "./animate.scss"
import { NavLink } from 'react-router-dom'

const Animate = () => {
    const sectionRef = useRef(null)
    const [active, setActive] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setActive(entry.isIntersecting)
            },
            { threshold: 0.5 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={sectionRef}
            className={`animate-section ${active ? "active" : ""}`}>
            <div className="animate-section-overlay"></div>
            <NavLink to={"/singleProduct/68"}>
                <img className="animate-section-img left-img-two left" src={img1} />
            </NavLink>
            <NavLink to={"/singleProduct/70"}>
                <img className="animate-section-img left-img-one left" src={img3} />
            </NavLink>
            <NavLink to={"singleProduct/62"}>
                <img className="animate-section-img left-img-zero left" src={img4} />
            </NavLink>

            <NavLink to={"/singleProduct/6"}>
                <img className="animate-section-img center-img center" src={img5} />
            </NavLink>

            <NavLink to={"/singleProduct/17"}>
                <img className="animate-section-img right-img-zero right" src={img} />
            </NavLink>
            <NavLink to={"/singleProduct/8"}>
                <img className="animate-section-img right-img-three right" src={img2} />
            </NavLink>
            <NavLink to={"/singleProduct/25"}>
                <img className="animate-section-img right-img-two right" src={img6} />
            </NavLink>
        </div>
    )
}

export default Animate