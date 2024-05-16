import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Discount } from '../pages/Discount'
import { AcquaPool } from '../pages/AcquaPool'
import { AssignmentUse } from '../pages/AssignmentUse'
import { IPTU } from '../pages/IPTU'
import { PriorityCalendar } from '../pages/PriorityCalendar'
import { Minor } from '../pages/Minor'
import { Pool } from '../pages/Pool'
import { LostFound } from '../pages/LostFound'
import { Transfer } from '../pages/Transfer'
import { WyndhamGreen} from '../pages/WyndhamGreen'
import { WyndhamMeeting } from '../pages/WyndhamMeeting'
import { Advice } from '../pages/Advice'
import { ServiceChannel } from '../pages/ServiceChannel'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discount" element={<Discount />} />
            <Route path="/acquapool" element={<AcquaPool />} />
            <Route path="/assignmentuse" element={<AssignmentUse />} />
            <Route path="/prioritycalendar" element={<PriorityCalendar />} />
            <Route path="/iptu" element={<IPTU />} />
            <Route path="/minor" element={<Minor />} />
            <Route path="/pool" element={<Pool />} />
            <Route path="/lostfound" element={<LostFound />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/wyndhamgreen" element={<WyndhamGreen />} />
            <Route path="/wyndhammeeting" element={<WyndhamMeeting />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/servicechannel" element={<ServiceChannel />} />
        </Routes>

    )
}