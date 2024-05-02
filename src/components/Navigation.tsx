import React from "react"
import StyledNavLink from "./StyledNavLink"
import Logo from "./Logo"


export default function Navigation() {
    return (
        <nav className="sticky top-0 z-50">
            <div className="bg-slate-900 py-2 border-b border-pink-600 shadow-lg">
                <div className="max-w-7xl md:mx-auto md:w-3/4 md:space-x-2 space-y-2 md:space-y-0">
                    <Logo/>
                    <StyledNavLink to="/about/">About</StyledNavLink>
                    <StyledNavLink to="/projects/">Projects</StyledNavLink>
                </div>
            </div>
        </nav>
    )
}