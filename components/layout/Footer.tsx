const Footer = () => {
  return (
    <footer className="px-[1rem] md:px-[3rem]">
      <div className="bg-green-600">Test</div>
      <div className="flex flex-wrap">
        <div>
          <h3>alx</h3>
          <p>
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>
        <div className="flex">
        <div>
          <h3>Explore</h3>
          <ul className="text-sm text-gray-600 list-none p-0 m-0">
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Apartments in Dubai
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Hotels in New York
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Villa in Spain
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Mansion in Indonesia
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul className="text-sm text-gray-600 list-none p-0 m-0">
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Carerr
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Customers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Brand
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Help</h3>
          <ul className="text-sm text-gray-600 list-none p-0 m-0">
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                ancel booking
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-800 transition no-underline"
              >
                Refunds Process
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <hr />
      <div className=" flex flex-wrap justify-between">
        <div>
          <p>
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details{" "}
            <a href="#">
              <span>here</span>
            </a>
          </p>
        </div>
        <div className="flex">
          <p>Terms of Service</p>
          <p className="ps-[1rem]">Policy service</p>
          <p className="ps-[1rem]">Cookies Policy</p>
          <p className="ps-[1rem]">Partners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
