import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {stylesWithCssVar} from "../utils/motion";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const  NoLockin = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end end'] });
    // const lockProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const lockProgress = useTransform(scrollYProgress, [0.5, 0.9], [-100, 0]);
    const lockProgress2 = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
    const lockProgress3 = useTransform(scrollYProgress, [0.9, 0.95], [0, -100]);

    const [t] = useTranslation();

    const goToClinic: any[] = t('aboutUs.lockSection.goToClinic', {returnObjects: true});

    return (
        <motion.section className="relative z-10 w-[100vw] nolockin-section"
                        ref={ref}
                        style={stylesWithCssVar({
                            "--lock-progress": lockProgress3,
                            "--progress": lockProgress2,
                            "--progress2": lockProgress,
                        })}
        >
            <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="c-itHBAu">
                <motion.path d="M50 50.75V32C50 18.1929 61.1929 7 75 7C88.8071 7 100 18.1929 100 32V50.75V73" stroke="#efc862"
                      stroke-width="8" stroke-linecap="round"
                      style={{
                          willChange: 'transform',
                          strokeDasharray: 140,
                          strokeDashoffset: 'var(--progress2)',
                          transform: 'translateY(var(--lock-progress))',
                          transition: 'transform 600ms cubic-bezier(0.86, 0, 0.07, 1) 0s'
                      }}>

                </motion.path>
                <path
                    d="M109.75 143.5H40.25C35.2794 143.5 31.25 139.471 31.25 134.5V83.75C31.25 78.7794 35.2794 74.75 40.25 74.75H109.75C114.721 74.75 118.75 78.7794 118.75 83.75V134.5C118.75 139.471 114.721 143.5 109.75 143.5Z"
                    stroke="#efc862" stroke-width="8" stroke-linecap="round" fill="var(--colors-background)"
                    style={{
                        willChange: 'stroke-dasharray',
                        strokeDasharray: 300,
                        strokeDashoffset: 'var(--progress)'
                    }}></path>
            </svg>
            <h2 className="mt-12 text-center font-heading text-3xl font-bold leading-[1] tracking-tighter text-[var(--color)]">
                {t('aboutUs.lockSection.staySafe')}
                <br/>{" "}
                <span className="text-secondary text-2xl">
            {goToClinic[0]}
            <br/>
            {goToClinic[1]}
          </span>
            </h2>

            <p className="mx-auto mt-20 max-w-[72rem] text-center text-l text-white [&_a]:underline">
                {t('aboutUs.lockSection.text.first')}{" "}
                <Link
                    to={'/services'}
                    className={'text-[var(--color)]'}
                >
                    {t('aboutUs.lockSection.text.link1')}
                </Link>{" "}
                {t('aboutUs.lockSection.text.second')} {" "}
                <Link
                    to={'/contacts'}
                    rel="noopener nofollow noreferrer"
                    className={'text-[var(--color)]'}
                >
                    {t('aboutUs.lockSection.text.link2')}
                </Link>{" "}
                {t('aboutUs.lockSection.text.third')}
            </p>
        </motion.section>
    );
}