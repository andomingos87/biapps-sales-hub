export const Footer = () => {
  return (
    <footer className="bg-base-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">BiApps</h3>
            <p className="text-base-content/80">
              Transformando negócios através da Inteligência Artificial
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:text-primary">Serviços</a></li>
              <li><a href="/#about" className="hover:text-primary">Sobre</a></li>
              <li><a href="/#technologies" className="hover:text-primary">Tecnologias</a></li>
              <li><a href="/#clients" className="hover:text-primary">Clientes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contato@biapps.com.br" className="hover:text-primary">
                  contato@biapps.com.br
                </a>
              </li>
              <li>
                <a href="tel:+551199999999" className="hover:text-primary">
                  (11) 99999-9999
                </a>
              </li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://linkedin.com/company/biapps" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/biapps" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/biapps" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-base-300 text-center text-base-content/60">
          <p>&copy; {new Date().getFullYear()} BiApps. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};