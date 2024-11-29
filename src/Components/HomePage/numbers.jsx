'use client'
import { CountUp } from 'countup.js';
import { useEffect } from 'react';


const Numbers = () => {
    useEffect(() => {
        const counters = [
            { id: 'escapeRooms', end: 18, suffix: '+', enableScrollSpy: true },
            { id: 'satisfiedPlayers', end: 182, suffix: '+', enableScrollSpy: true },
            { id: 'expertStaff', end: 55, suffix: '+', enableScrollSpy: true },
            { id: 'winningAwards', end: 39, suffix: '+', enableScrollSpy: true },
        ];

        counters.forEach(({ id, end, suffix }) => {
            const countUp = new CountUp(id, end, { duration: 2, suffix });
            if (!countUp.error) {
                countUp.start();
            } else {
                console.error(countUp.error);
            }
        });
    }, []);

    return (
        <div className="bg-cover h-64 max-w-screen-xl mx-auto mt-28" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url('/assets/b2.jpg')"
        }}>
            <div className="flex justify-around h-full items-center">
                <div className="text-center">
                    <h4 id="escapeRooms" className="text-3xl font-semibold">0</h4>
                    <p>Escape Room</p>
                </div>
                <div className="text-center">
                    <h4 id="satisfiedPlayers" className="text-3xl font-semibold">0</h4>
                    <p>Satisfied Players</p>
                </div>
                <div className="text-center">
                    <h4 id="expertStaff" className="text-3xl font-semibold">0</h4>
                    <p>Expert Staff</p>
                </div>
                <div className="text-center">
                    <h4 id="winningAwards" className="text-3xl font-semibold">0</h4>
                    <p>Winning Awards</p>
                </div>
            </div>
        </div>
    );
};

export default Numbers;