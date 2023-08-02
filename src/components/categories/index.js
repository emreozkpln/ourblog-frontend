import React from 'react'
import { motion } from "framer-motion"

function Categories() {
    return (
        <motion.div initial={{ opacity: 0, translateX: -60 }} animate={{ opacity: 1, translateX: 0 }}>
            <div className="flex gap-4 items-center">
                <div className="w-1.5 h-28 bg-color2 rounded-lg"></div>
                <h2 className="text-3xl font-extrabold text-color2">
                    JAVASCRİPT <span className="bg-color3 p-1 text-white rounded-xl shadow-xl">100</span>
                </h2>
            </div>
        </motion.div>
    )
}

export default Categories