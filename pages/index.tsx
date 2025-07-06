import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  const handleBookNow = () => {
    alert('Booked!')
  }

  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-8 grid gap-6 md:grid-cols-3">
        <Card
          title="Modern Apartment"
          description="A beautiful modern apartment in the city center."
          image="/assets/house1.jpg"
        />
        <Card
          title="Cozy Cottage"
          description="A cozy cottage in the countryside."
          image="/assets/house2.jpg"
        />
        <div>
          <Button label="Book Now" onClick={handleBookNow} />
        </div>
      </main>
    </>
  )
}
