export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-primary">$FOURFOOT</h3>
            <p className="text-sm text-foreground-muted">The next step in the BNB meme revolution. 4EVER BNB.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground-muted">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contract */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Contract</h4>
            <div className="bg-surface border border-border rounded-lg p-4">
              <p className="text-xs text-foreground-muted mb-2">Contract Address:</p>
              <code className="text-xs text-primary break-all">0x...coming soon</code>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground-muted">
            © 2025 FOURFOOT. All rights reserved. | Built by degens, for degens.
          </p>
          <p className="text-xs text-foreground-subtle mt-2">
            Disclaimer: Cryptocurrency investments carry risk. DYOR before investing.
          </p>
        </div>
      </div>
    </footer>
  )
}
