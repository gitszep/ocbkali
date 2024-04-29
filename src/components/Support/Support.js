// Support.jsx
import React from 'react';
import { FaGraduationCap, FaTools, FaCertificate, FaUserFriends, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const Support = () => {
    return (
        <div name='support' className='w-full mt-0'>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                
                {/* Doświadczenie i fachowość */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <p className='flex items-center'>
                            <FaGraduationCap className='w-10 h-10 ml-2 text-blue-500 hover:text-blue-700' />
                        </p>
                        <h3 className='font-bold text-2xl my-6'>Doświadczenie i fachowość</h3>
                        <p className='text-gray-600 text-xl'>
                            Nasz zespół ekspertów posiada wieloletnie doświadczenie w branży rekreacyjnej i sportowej.
                        </p>
                    </div>
                </div>

                {/* Kompleksowe usługi */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <p className='flex items-center'>
                            <FaTools className='w-10 h-10 ml-2 text-blue-500 hover:text-blue-700' />
                        </p>
                        <h3 className='font-bold text-2xl my-6'>Kompleksowe usługi</h3>
                        <p className='text-gray-600 text-xl'>
                            Oferujemy szeroki wachlarz usług dostosowanych do indywidualnych potrzeb każdego klienta.
                        </p>
                    </div>
                </div>

                {/* Wysoka jakość */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <p className='flex items-center'>
                            <FaCertificate className='w-10 h-10 ml-2 text-blue-500 hover:text-blue-700' />
                        </p>
                        <h3 className='font-bold text-2xl my-6'>Wysoka jakość</h3>
                        <p className='text-gray-600 text-xl'>
                            Wszystkie nasze usługi są wykonywane z najwyższą dbałością o szczegóły i zgodnie z obowiązującymi normami.
                        </p>
                    </div>
                </div>

                {/* Indywidualne podejście */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <p className='flex items-center'>
                            <FaUserFriends className='w-10 h-10 ml-2 text-blue-500 hover:text-blue-700' />
                        </p>
                        <h3 className='font-bold text-2xl my-6'>Indywidualne podejście</h3>
                        <p className='text-gray-600 text-xl'>
                            Do każdego klienta podchodzimy indywidualnie, aby zapewnić mu najlepszą możliwą ochronę.
                        </p>
                    </div>
                </div>

                {/* Zaufanie */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <p className='flex items-center'>
                            <FaHandshake className='w-10 h-10 ml-2 text-blue-500 hover:text-blue-700' />
                        </p>
                        <h3 className='font-bold text-2xl my-6'>Zaufanie</h3>
                        <p className='text-gray-600 text-xl'>
                            Jesteśmy renomowanym ośrodkiem, któremu zaufało już wiele osób w całej Polsce.
                        </p>
                        
                    </div>
                </div>

                {/* Bezpieczeństwo */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <p className='flex items-center'>
                            <FaShieldAlt className='w-10 h-10 ml-2 text-blue-500 hover:text-blue-700' />
                        </p>
                        <h3 className='font-bold text-2xl my-6'>Bezpieczeństwo</h3>
                        <p className='text-gray-600 text-xl'>
                            Dokładamy wszelkich starań, aby zapewnić optymalne warunki do uprawiania sportu i rekreacji bez narażania się na niebezpieczeństwo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
