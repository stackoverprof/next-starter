import React, { useEffect } from 'react';
import NProgress, { NProgressOptions } from 'nprogress';
import Router from 'next/router';

interface ProgressBarProps {
	height?: number | string;
	color?: string;
	delay?: number;
	options?: Partial<NProgressOptions>;
	nonce?: string;
}

const ProgressBar = React.memo(
	function Component({
		height = '2px',
		color = '#29D',
		delay = 0,
		options = {},
	}: ProgressBarProps) {
		useEffect(() => {
			NProgress.configure({ ...options, showSpinner: false });

			let timeout: NodeJS.Timeout;
			const start = () => {
				timeout = setTimeout(() => NProgress.start(), delay);
			};
			const done = () => {
				clearTimeout(timeout);
				NProgress.done();
			};

			Router.events.on('routeChangeStart', start);
			Router.events.on('routeChangeComplete', done);
			Router.events.on('routeChangeError', done);

			return () => {
				Router.events.off('routeChangeStart', start);
				Router.events.off('routeChangeComplete', done);
				Router.events.off('routeChangeError', done);
				clearTimeout(timeout);
			};
		}, []);

		return (
			<style>
				{`
                    #nprogress {
                        pointer-events: none;
                    }

                    #nprogress .bar {
                        background: ${color};
                        position: fixed;
                        z-index: 99999;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: ${typeof height === 'string' ? height : `${height}px`};
                    }

                    #nprogress .peg {
                        display: block;
                        position: absolute;
                        right: 0px;
                        width: 100px;
                        height: 100%;
                        box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
                        opacity: 1.0;
                        -webkit-transform: rotate(3deg) translate(0px, -4px);
                            -ms-transform: rotate(3deg) translate(0px, -4px);
                                transform: rotate(3deg) translate(0px, -4px);
                    }

                    #nprogress .spinner {
                        display: block;
                        position: fixed;
                        z-index: 99999;
                        top: 15px;
                        right: 15px;
                    }

                    #nprogress .spinner-icon {
                        width: 18px;
                        height: 18px;
                        box-sizing: border-box;
                        border: solid 2px transparent;
                        border-top-color: ${color};
                        border-left-color: ${color};
                        border-radius: 50%;
                        -webkit-animation: nprogress-spinner 400ms linear infinite;
                                animation: nprogress-spinner 400ms linear infinite;
                    }

                    .nprogress-custom-parent {
                        overflow: hidden;
                        position: relative;
                    }

                    .nprogress-custom-parent #nprogress .spinner,
                    .nprogress-custom-parent #nprogress .bar {
                        position: absolute;
                    }

                    @-webkit-keyframes nprogress-spinner {
                        0%   { -webkit-transform: rotate(0deg); }
                        100% { -webkit-transform: rotate(360deg); }
                    }

                    @keyframes nprogress-spinner {
                        0%   { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
			</style>
		);
	},
	() => true
);

export default ProgressBar;
