import { section } from 'motion/react-client'
import React, { useRef } from 'react'
import Card from '../components/Card'


const About = () => {
    const grid2Container = useRef()
  return (
    <section className='c-space section-spacing pt-60 md:pt-8 '>

        <h2 className='text-heading mt-20 '>
            About Me
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/* Grid 1 */}
            <div className='flex grid-default-color grid-1'>
                <img src="assets/coding-pov.png" className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' />
                <div className='z-10 absolute bottom-0 mb-5 md:mb-15'>
                        <p className='headtext'>Hi. I am Abdullah Waqar</p>
                        <p className='subtext'>I am currently doing Software Engineering degree from PAK AUSTRIA university.</p>
                </div>

                <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-r from-indigo' />
            
            </div>
            {/* Grid 2 */}
            <div className='flex grid-default-color grid-2'>

                    <div className='flex items-center justify-center w-full h-full' ref={grid2Container}>
                        <p className='flex items-end text-5xl text-gray-400'>Code is Craft</p>
                        <Card style={{rotate: "75deg" , top:"30%" , left: "20%"}} text="GRASP" containerRef={grid2Container}/>
                        <Card style={{rotate: "-30deg" , top:"60%" , left: "45%"}} text="Solid" containerRef={grid2Container}/>
                        <Card style={{rotate: "90deg" , bottom:"30%" , left: "78%"}} text="Design Pattern" containerRef={grid2Container}/>
                        <Card style={{rotate: "-45deg" , top:"55%" , left: "0%"}} text="DSA" containerRef={grid2Container}/>
                        <Card style={{rotate: "20deg" , top:"18%" , left: "30%"}} text="WEB Development" containerRef={grid2Container}/>
                        <Card style={{rotate: "30deg" , top:"70%" , left: "70%"}} image="assets/logos/csharp-pink.png" containerRef={grid2Container}/>
                        <Card style={{rotate: "-45deg" , top:"70%" , left: "25%"}} image="assets/logos/dotnet-pink.png" containerRef={grid2Container}/>
                        <Card style={{rotate: "-45deg" , top:"5%" , left: "10%"}} image="assets/logos/blazor-pink.png" containerRef={grid2Container}/>
                    </div>

            </div>
            {/* Grid 3 */}
            <div className='flex grid-black-color grid-3'>
                <div className='a-10 w-[50%]'>
                        <p className='headtext'>
                            Time Zone
                        </p>
                        <p className='subtext'>
                            I Live 
                        </p>
                </div>

            </div>
            {/* Grid 4 */}
            <div className='flex grid-special-color grid-4'></div>
            {/* Grid 5 */}
            <div className='flex grid-default-color grid-5'></div>
          
        </div>
    </section>
  )
}

export default About