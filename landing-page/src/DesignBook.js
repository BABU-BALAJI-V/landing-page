import React from 'react'

const DesignBook = () => {
  return (
    <section>
        <div className='dbleft'>
            <img src={require('./logo1.jpg')} alt="Logo" />
        </div>
        <div className='dbright'>
            <h1>Success starts with a great design book</h1><br />
            <p>Morbi leo tortor, fermentum sed orci vitae, tempor </p><br />
            <p>auctor turpis. Fusce bibendum accumsan fringilla.</p><br /> 
            <p>Nulla aliquam luctus sem, at posuere nibh lobortis et.</p><br /> 
            <p>Ut ac mollis risus, eu congue libero. Nulla vestibulum ultricies tortor at ultrices.</p><br /><br />
            <p>Available in these formats. Enter your email and we will send you the book.</p><br />
            <form>
                <input 
                    type="text"
                    placeholder='Enter your email'    
                />
                <button>GET THE BOOK</button>
            </form><br />
            <p>DESIGN AND OPTIMIZATION ADVICE FEATURED ON</p>
            ----------LOGOS
        </div>
    </section>
  )
}

export default DesignBook