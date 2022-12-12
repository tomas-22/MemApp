import { NavLink, Routes, Route } from "react-router-dom"
import { Hot } from "./Hot"
import { Regular } from "./Regular"


export const MemRouting = () => {
    return <div>
        <div>
            <NavLink to="/hot">HOT</NavLink>
            <p><NavLink to="/regular">REGULAR</NavLink></p>
        </div>
        <Routes>
            <Route path="/hot" element={<Hot />} />
            <Route path="/regular" element={< Regular />} />
        </Routes>
    </div>
}