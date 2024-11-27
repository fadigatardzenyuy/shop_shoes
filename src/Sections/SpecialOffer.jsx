import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
          <img src={offer} 
          alt="" 
          width={773} height={687}
          className="object-contain w-ful"/>
      </div>
      <div className='flex flex-1 flex-col'>
    <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
      Special
      <span className='text-coral-red'> offer </span>
     
    </h2>
    <p className='mt-4 lg:max-w-lg info-text'>
      Embark on a shopping journey that redefines your experince with unbeateable details. From premier selections to incredible savings, we offer unparalled value that sets us apart.
    </p>
    <p className='mt-6 lg:max-w-lg info-text'>
      Navigate a realm of possibilities designed to fullfill your unique desires, supassing the loftless experience. Your journey with us is nothing short of exceptional
    </p>
    <div className='mt-11 flex flex-wrap gap-4'>
      <Button label='Shop now' iconURL={arrowRight} />
      <Button label='Learn more' 
      backgroundColor="bg-white"
      borderColor="border-slate-gray"
      textColor="text-slate-gray"/>
    </div>
  </div></section>
  )
}

export default SpecialOffer