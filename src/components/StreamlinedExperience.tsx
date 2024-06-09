import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {stylesWithCssVar} from "../utils/motion";
import {useTranslation} from "react-i18next";

export const StreamlinedExperience = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });
    const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
    const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

    const opacityBorder = useTransform(
        scrollYProgress,
        [0.7, 0.71, 0.72],
        [1, 1, 0]
    );
    const finalTextOpacity = useTransform(
        scrollYProgress,
        [0.7, 0.71, 0.72, 0.8, 0.9],
        [0, 0, 1, 1, 0]
    );

    const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);
    const [t] = useTranslation();

    const squareEnd: any[] = t('aboutUs.squareEnd', {returnObjects: true});

    return (
        <motion.section
            style={stylesWithCssVar({
                opacity: opacitySection,
                "--scale": scale,
                "--opacity-border": opacityBorder,
            })}
            ref={targetRef}
            className="mt-[50vh] flex h-[500vh] items-start justify-start w-[100vw]"
        >
            <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[var(--color)] before:opacity-[var(--opacity-border)]">
                <motion.p
                    aria-hidden
                    style={{ x: textX, y: "-50%" }}
                    className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[23rem] !text-heading z-[10]"
                >
                    {t('aboutUs.square')}
                </motion.p>
                <motion.p
                    aria-hidden
                    style={{ x: textX, y: "-50%" }}
                    className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[15] text-[23rem] !text-transparent [-webkit-text-stroke:!1px_var(#f5f5f7)]"
                >
                    {t('aboutUs.square')}
                </motion.p>

                <motion.p
                    style={{
                        opacity: finalTextOpacity,
                        scale: finalTextScale,
                        y: "-50%",
                        x: "-50%",
                    }}
                    className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-center end-text"
                >
                    {squareEnd[0]}
                    <br />
                    {squareEnd[1]}
                    <br/>
                    {squareEnd[2]}
                </motion.p>
                <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-transparent opacity-[var(--opacity-border)]" />
                <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[var(--color)] opacity-[var(--opacity-border)]" />
            </div>
        </motion.section>
    );
};