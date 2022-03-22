import React from 'react'
import {Link} from 'react-router-dom'
import './Course.css'

function Course() {
    return (

        <div className='entire_page'>
            
            <div className='super_header'>
                    <h1 className='course_header'>
                        Course
                    </h1>
            </div>

            <div className='row-course'>
                

                <div className='bg-rooteq'>

                    <div className='rooteq-couse'>
                        <h2 style={{padding:'2rem'}}>    
                            Root of Equation
                        </h2>
                        
                        <p style={{padding:'2rem'}}>
                            This is Root of Equation Course 
                        </p>
                        
                        <Link to="./root_of_equation" ><button type='button' class='btn btn-primary' className='bt_root_of_equation'>View Root Of Equation Content</button></Link>
                     
                    </div>

                </div>

                <div className='bg-linear'>

                    <div className='linear-course'>
                        <h2 style={{padding:'2rem'}}>    
                            Linear Algebra
                        </h2>
                        
                        <p style={{padding:'2rem'}}>
                            This is Linear Algebra Course 
                        </p>
                        
                        <Link to="./linear_algebra" ><button type='button' class='btn btn-primary' className='bt_linear'>View Linear Algebra Content</button></Link>
                     
                    </div>

                </div>

                <div className='bg-polation'>

                    <div className='polation-course'>
                        
                        <h2 style={{padding:'2rem'}}>    
                            Polation
                        </h2>
                        
                        <p style={{padding:'2rem'}}>
                            This is Polation Course
                        </p>
                        
                        <Link to="./polation" ><button type='button' class='btn btn-primary' className='bt_polation'>View Polation Content</button></Link>
                     
                    </div>

                </div>                
                


            </div>
                

                
        </div>
        
        
    )
}

export default Course
