import React from 'react';

class CGU extends React.Component{
constructor(props){
    super(props);
    this.handleShowCGU = this.props.handler
}
    render(){
        return (
            <div className='w-2/4 text-midnight-600 mx-auto bg-white bg-opacity-70 rounded-lg px-2 py-2
            animate__animated animate__fadeInTopLeft'>
                <div className='flex flex-row justify-between'>
                    <h4 className='font-bold antialiased'>CGU</h4>
                    <button
                        className='font-extrabold w-6 h-6 flex flex-row justify-center items-center
                            transition transform motion-reduce:transition-none motion-reduce:transform-none
                            duration-300 ease-in-out hover:scale-125 rounded-xl hover:bg-mandy-300'
                        onClick={this.handleShowCGU}
                    >X</button>
                </div>
                <article className='my-5'>
                    <p className='my-2 antialiased'>
                        Velit irure proident ex exercitation non laboris velit aliquip ea quis irure id exercitation ut. Occaecat esse eu dolore laboris aute dolor amet veniam duis deserunt. Cillum mollit exercitation sunt eu pariatur occaecat consequat. Consequat nostrud non voluptate eu non in proident.
                    </p>
                    <p className='my-2 antialiased'>
                        Magna sint duis enim dolore anim ut ea aliquip id exercitation ut culpa dolore. Minim veniam qui veniam aliquip. Anim excepteur ex cillum adipisicing laborum. Proident aliqua proident proident nulla pariatur.
                    </p>
                    <p className='my-2 antialiased'>
                        Laborum ut esse Lorem non. Consectetur excepteur labore sunt quis exercitation esse eiusmod adipisicing quis laboris qui nisi sint. Qui amet eu culpa eu culpa aute qui laboris incididunt amet. Do exercitation dolore minim eiusmod cillum veniam enim exercitation aliquip nulla laboris cillum culpa ea. Fugiat nostrud dolore ipsum qui reprehenderit eiusmod irure fugiat. Aute cillum cillum amet eu minim ipsum minim. Veniam minim eiusmod voluptate aute laborum et veniam minim do ea et minim.
                    </p>
                </article>
            </div>
        )
    }
};

export default CGU;