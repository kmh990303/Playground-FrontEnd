import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';


const Animation: React.FC = () => {
    const [check, setCheck] = useState<boolean>(false);
    const { scrollY } = useScroll();

    const opacityHero = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

    const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCheck(!check);
    }

    return (
        <>
            {/* <motion.ul
                transition={{ staggerChildren: 0.5 }}
                className="space-y-4"
            >
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: 400 }}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="bg-blue-300 p-4 w-28 h-28 text-center mx-auto block translate-y-40 mb-4"
                >
                </motion.div>

                <motion.span
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2 }}
                    className="w-28 h-28 block bg-red-400 mx-auto mb-8"
                >
                    fire
                </motion.span>

                <AnimatePresence>
                    {check && (
                        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
                            <motion.li layout exit={{ y: -30, opacity: 0 }} animate={{ rotate: [0, 180, 0] }} className="w-28 h-28 block mx-auto bg-amber-400 mb-4">
                                li div
                            </motion.li>
                            <motion.li initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="w-28 h-28 block mx-auto bg-amber-400 mb-4">
                                li div
                            </motion.li>
                            <motion.li initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="w-28 h-28 block mx-auto bg-amber-400 mb-4">
                                li div
                            </motion.li>
                            <motion.li initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="w-28 h-28 block mx-auto bg-amber-400 mb-4">
                                li div
                            </motion.li>
                            <motion.li initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="w-28 h-28 block mx-auto bg-amber-400 mb-4">
                                li div
                            </motion.li>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.ul>

            <motion.button onClick={buttonHandler} className="text-center block mx-auto p-4 border-2 border-purple-400" style={{ opacity: opacityHero }}>
                change button
            </motion.button > */}
            <motion.ul className="flex gap-8" transition={{ staggerChildren: 0.5 }} initial='hidden' animate='visible'>
                <motion.li className="w-28 h-28 block mx-auto bg-amber-400 m-4" variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1.4 },
                }}>
                    h1
                </motion.li>
                <motion.li className="w-28 h-28 block mx-auto bg-amber-400 m-4" variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1.6 },
                }}>
                    h2
                </motion.li>
                <motion.li className="w-28 h-28 block mx-auto bg-amber-400 m-4" variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1.8 },
                }}>
                    h3
                </motion.li>
                <motion.li className="w-28 h-28 block mx-auto bg-amber-400 m-4" variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1.6 },
                }}>
                    h4
                </motion.li>
                <motion.li className="w-28 h-28 block mx-auto bg-amber-400 m-4" variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1.4 },
                }}>
                    h5
                </motion.li>
            </motion.ul>
        </>
    )
}

export default Animation;