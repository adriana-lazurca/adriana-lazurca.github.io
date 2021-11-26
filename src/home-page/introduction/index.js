const Introduction = () => {
   return (
      <>
         <PresentationCard />
         <Carousel />
         <Contact />
      </>
   );
};

function PresentationCard() {
   return <>Name+position</>;
}

function Carousel() {
   return (
      <>
         <div>Carousel</div>
      </>
   );
}

function Contact() {
   return (
      <>
         <div>Contact icons</div>
      </>
   );
}

export default Introduction;
