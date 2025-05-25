const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">Connect and Collaborate</h2>
          <p className="text-gray-400">
            Empowering brands through strategic public relations solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-lg font-medium mb-3">Contact Us:</h3>
            <div className="space-y-1">
              <a
                href="tel:+919999944807"
                className="block hover:text-gray-300 transition-colors"
              >
                +91 99999 44807
              </a>
              <a
                href="mailto:cmo@ytpr.in"
                className="block hover:text-gray-300 transition-colors"
              >
                cmo@ytpr.in
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="text-center">
            <h3 className="text-lg font-medium mb-3">Our Location</h3>
            <address className="text-gray-400 not-italic">
              C-84, Sector 2,<br />
              Noida, Uttar Pradesh,<br />
              India
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;