'use client'
import { CountUp } from 'countup.js';
import { useEffect } from 'react';


const Numbers = () => {
    useEffect(() => {
        const counters = [
            { id: 'escapeRooms', end: 18, suffix: '+' },
            { id: 'satisfiedPlayers', end: 182, suffix: '+' },
            { id: 'expertStaff', end: 55, suffix: '+' },
            { id: 'winningAwards', end: 39, suffix: '+' },
        ];

        counters.forEach(({ id, end, suffix }) => {
            const countUp = new CountUp(id, end, { duration: 2, suffix, enableScrollSpy: true, scrollSpyOnce: true });
            if (!countUp.error) {
                countUp.start();
            } else {
                countUp.handleScroll();
            }
        });
    }, []);

    return (
        <div className="bg-cover h-80 max-w-screen-xl mx-auto" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url('/assets/b2.jpg')"
        }}>
            <div className="flex justify-around h-full items-center">
                <div className="text-center">
                    <h4 id="escapeRooms" className="text-5xl font-semibold">0</h4>
                    <p>Escape Room</p>
                </div>
                <div className="text-center">
                    <h4 id="satisfiedPlayers" className="text-5xl font-semibold">0</h4>
                    <p>Satisfied Players</p>
                </div>
                <div className="text-center">
                    <h4 id="expertStaff" className="text-5xl font-semibold">0</h4>
                    <p>Expert Staff</p>
                </div>
                <div className="text-center">
                    <h4 id="winningAwards" className="text-5xl font-semibold">0</h4>
                    <p>Winning Awards</p>
                </div>
            </div>
        </div>
    );
};

export default Numbers;