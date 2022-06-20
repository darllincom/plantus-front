import Icons, { IconNames } from '../../../../components/icons';
import { User } from '../../../../models/user';

type UserDetailsProps = {
	user: User;
};

export default function PersonalInfo({ user }: UserDetailsProps) {
	return (
		<>
			<div className="h-full w-[22rem] lg:w-[73%] flex flex-col items-center justify-between">
				<div className="w-full h-[70%] p-3 rounded-2xl bg-white shadow-sm">
					<div className="w-full flex items-center">
						<Icons name={IconNames.PERFIL} size="sm" bg />
						<p className="text-xs text-dark-green font-semibold lg:text-lg lg:ml-5">
							Informações Pessoais
						</p>
					</div>
					<fieldset className="relative w-full my-1 lg:mt-4">
						<p
							className=" 
                      border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
						>
							{user.fullName}
						</p>
						<label
							className="
                        absolute left-4 -top-2 z-20
                        text-light-gray text-xs 
                        transition-all
                        2xl:text-xs
                      "
						>
							Nome Completo
						</label>
						<div
							className="
                        absolute 
                        z-10
                        transition-all
                        duration-300
                        left-3 -top-2 w-28 h-3
                        rounded-full
                        bg-white 
                      "
						/>
					</fieldset>
					<div className="w-100 flex items-center flex-col lg:flex-row">
						<fieldset className="relative w-full my-2 lg:mt-4 lg:w-[48%] lg:mr-4">
							<p
								className=" 
                      border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
							>
								{new Date(user.birthDate).toLocaleDateString()}
							</p>
							<label
								className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-xs
                      "
							>
								Data de Nascimento
							</label>
							<div
								className="
                        absolute 
                        z-10
                        transition-all
                        duration-300
                        left-3 -top-2 w-36 h-3
                        rounded-full
                        bg-white 
                      "
							/>
						</fieldset>
						<fieldset className="relative w-full my-2 lg:mt-4">
							<p
								className=" 
                      border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
							>
								{user.credentials.email}
							</p>
							<label
								className="
                      absolute left-4 -top-2 z-20
                      text-light-gray text-xs 
                      transition-all
                      2xl:text-xs
                      "
							>
								Email
							</label>
							<div
								className="
                        absolute 
                        z-10
                        transition-all
                        duration-300
                        left-3 -top-2 w-12 h-3
                        rounded-full
                        bg-white 
                      "
							/>
						</fieldset>
					</div>
					<div className="w-full flex items-center flex-row justify-between">
						<fieldset className="relative w-[48%] my-2 lg:mt-4 lg:w-[49%]">
							<p
								className=" 
                        border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
							>
								{user.phone}
							</p>
							<label
								className="
                        absolute left-4 -top-2 z-20
                        text-light-gray text-xs 
                        transition-all
                        2xl:text-xs
                        "
							>
								Telefone
							</label>
							<div
								className="
                          absolute 
                          z-10
                          transition-all
                          duration-300
                          left-3 -top-2 w-16 h-3
                          rounded-full
                          bg-white 
                        "
							/>
						</fieldset>

						<fieldset className="relative w-[48%] my-2 lg:mt-4 lg:w-[49%]">
							<p
								className=" 
                        border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
							>
								{user.whatsapp}
							</p>
							<label
								className="
                        absolute left-4 -top-2 z-20
                        text-light-gray text-xs 
                        transition-all
                        2xl:text-xs
                        "
							>
								Whatsapp
							</label>
							<div
								className="
                          absolute 
                          z-10
                          transition-all
                          duration-300
                          left-3 -top-2 w-20 h-3
                          rounded-full
                          bg-white 
                        "
							/>
						</fieldset>
					</div>
					<div className="w-full flex items-center justify-between">
						<fieldset className="relative w-[45%] my-2 lg:mt-4">
							<p
								className=" 
                        border-light-green 
                      border-2 rounded-xl 
                      w-full text-xs text-dark-gray 
                      py-1 px-3 outline-base-green
                      placeholder-transparent
                      lg:py-1
                      lg:px-5
                      lg:text-base"
							>
								{new Date(user.dateStarted).toLocaleDateString()}
							</p>
							<label
								className="
                        absolute left-4 -top-2 z-20
                        text-light-gray text-xs 
                        transition-all
                        2xl:text-xs
                        "
							>
								Inicio na Plantus
							</label>
							<div
								className="
                          absolute 
                          z-10
                          transition-all
                          duration-300
                          left-3 -top-2 w-28 h-3
                          rounded-full
                          bg-white 
                        "
							/>
						</fieldset>
						<fieldset className="w-[52%] flex items-center content-center justify-between object-center flex-row lg:justify-around">
							<div className="w-5 h-5 rounded-full bg-white border-light-green border-2">
								{user.hasRegisteringPending ? (
									<svg
										viewBox="0 0 33 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M26.7919 0H27.5759C27.5809 0.008 27.5859 0.0220032 27.5919 0.0220032C27.7029 0.0370032 27.8139 0.0549965 27.9249 0.0619965C28.0218 0.0632222 28.1182 0.0763213 28.2119 0.100998C28.3294 0.117541 28.4452 0.14466 28.5579 0.182007C28.5579 0.182007 28.5639 0.182007 28.5679 0.182007C28.6972 0.204565 28.8239 0.240417 28.9459 0.289001C29.0169 0.310001 29.0829 0.343994 29.1519 0.371994C29.2669 0.416994 29.3859 0.455996 29.4979 0.507996C29.6099 0.559996 29.6979 0.618995 29.7979 0.675995C30.0121 0.791057 30.2132 0.928862 30.3979 1.08701L30.4209 1.105C30.5209 1.189 30.6299 1.26799 30.7209 1.35899C30.8339 1.46599 30.9379 1.58301 31.0429 1.69901C31.1293 1.78657 31.2085 1.88086 31.2799 1.981C31.4096 2.16085 31.5291 2.3478 31.6379 2.541C31.7039 2.672 31.7729 2.802 31.8379 2.935C31.8649 2.989 31.8949 3.043 31.9159 3.099C31.9479 3.185 31.9739 3.27401 32.0019 3.36101L32.0949 3.653C32.1519 3.831 32.1719 4.01601 32.2119 4.19701C32.2225 4.25081 32.2295 4.30526 32.2329 4.36C32.2409 4.46 32.2469 4.56601 32.2529 4.66901C32.2529 4.67501 32.2529 4.682 32.2529 4.688C32.2801 4.85868 32.2842 5.03224 32.2649 5.20399C32.2579 5.33099 32.2319 5.459 32.2289 5.588C32.2265 5.63644 32.2202 5.6846 32.2099 5.73199C32.194 5.7803 32.182 5.8298 32.1739 5.88C32.1576 6.02711 32.1265 6.17219 32.0809 6.313C32.0569 6.413 32.0129 6.51301 31.9809 6.61301C31.9396 6.75473 31.8861 6.89257 31.8209 7.02499C31.7319 7.20099 31.6369 7.37401 31.5409 7.54601C31.4946 7.63074 31.4432 7.71256 31.3869 7.791C31.2963 7.92731 31.196 8.05698 31.0869 8.179C31.0039 8.264 30.9359 8.36501 30.8509 8.44901C28.4842 10.817 26.1176 13.1837 23.7509 15.549L23.6569 15.649C23.6879 15.681 23.7129 15.709 23.7399 15.735L30.8399 22.835C30.9399 22.935 31.0399 23.049 31.1399 23.154C31.2764 23.3004 31.3983 23.4599 31.5039 23.63C31.6571 23.8566 31.7909 24.0958 31.9039 24.345C31.9489 24.445 31.9979 24.545 32.0359 24.654C32.0809 24.78 32.1179 24.91 32.1559 25.038C32.1636 25.0852 32.174 25.1319 32.1869 25.178C32.2123 25.254 32.2297 25.3324 32.2389 25.412C32.2728 25.5493 32.2929 25.6897 32.2989 25.831C32.2989 25.926 32.3239 26.021 32.3319 26.117C32.3323 26.126 32.3352 26.1347 32.3401 26.1423C32.345 26.1498 32.3518 26.1559 32.3599 26.16V26.905L32.3269 26.914C32.3179 26.987 32.3129 27.062 32.2999 27.135C32.2729 27.288 32.2449 27.442 32.2109 27.594C32.1889 27.694 32.1499 27.786 32.1269 27.884C32.072 28.0773 32.0018 28.2659 31.9169 28.448C31.8461 28.6081 31.7649 28.7635 31.6739 28.913C31.5159 29.1869 31.3303 29.4439 31.1199 29.68C30.8238 30.0154 30.4829 30.3085 30.1069 30.551C29.9163 30.677 29.7156 30.7871 29.5069 30.88C29.3669 30.94 29.2269 31 29.0849 31.055C29.0069 31.086 28.9249 31.109 28.8449 31.133C28.7259 31.168 28.6079 31.206 28.4879 31.233C28.3289 31.266 28.1659 31.279 28.0079 31.316C27.8565 31.3459 27.7022 31.3587 27.5479 31.354C27.4629 31.354 27.3779 31.354 27.2929 31.354C27.1291 31.3647 26.9645 31.3529 26.8039 31.319C26.7275 31.304 26.6504 31.2929 26.5729 31.286C26.4169 31.256 26.2616 31.2227 26.1069 31.186C25.9402 31.1429 25.776 31.0909 25.6149 31.03C25.4344 30.965 25.2589 30.8867 25.0899 30.796C24.8778 30.6825 24.6728 30.5562 24.4759 30.418C24.2537 30.2573 24.0453 30.0784 23.8529 29.883C23.3349 29.361 22.8156 28.841 22.2949 28.323L19.1209 25.15L16.7209 22.75C16.6979 22.727 16.6739 22.707 16.6439 22.681C16.6139 22.707 16.5889 22.726 16.5659 22.749L16.2409 23.074L14.7239 24.591C13.8186 25.4957 12.9129 26.401 12.0069 27.307C11.1356 28.1737 10.2632 29.0427 9.3899 29.914C9.02132 30.2694 8.59917 30.5647 8.1389 30.789C7.96842 30.8688 7.79385 30.9396 7.6159 31.001C7.4819 31.05 7.3439 31.086 7.2059 31.124C7.1119 31.15 7.0159 31.165 6.9209 31.19C6.71167 31.2384 6.49845 31.2675 6.2839 31.277C5.81826 31.3088 5.35047 31.2734 4.8949 31.172C4.7459 31.139 4.5949 31.096 4.4539 31.052C4.3129 31.008 4.1869 30.969 4.0539 30.917C3.9399 30.871 3.8329 30.809 3.7209 30.757C3.53835 30.6721 3.36339 30.5717 3.1979 30.457C3.0459 30.352 2.8979 30.239 2.7529 30.124C2.53327 29.9472 2.33224 29.7485 2.1529 29.531C1.97871 29.3287 1.82402 29.1104 1.6909 28.879C1.5909 28.7 1.4999 28.517 1.4119 28.332C1.35714 28.2142 1.30939 28.0934 1.2689 27.97C1.2149 27.807 1.1619 27.643 1.1219 27.476C1.0819 27.309 1.0589 27.138 1.0289 26.968C1.0169 26.899 0.998901 26.832 0.992901 26.763C0.986901 26.694 0.992901 26.619 0.992901 26.548C0.992901 26.411 0.992901 26.273 0.992901 26.136C0.986744 26.0046 0.997158 25.8729 1.0239 25.744C1.06129 25.5927 1.08836 25.439 1.1049 25.284C1.13698 25.0917 1.1872 24.9028 1.2549 24.72C1.31741 24.5388 1.38985 24.3612 1.4719 24.188C1.5868 23.9468 1.72055 23.7151 1.8719 23.495C2.04345 23.2488 2.23727 23.0188 2.4509 22.808C4.80557 20.4553 7.15956 18.102 9.5129 15.748C9.52978 15.7326 9.54581 15.7162 9.5609 15.699C9.56798 15.6921 9.5736 15.6839 9.57743 15.6748C9.58127 15.6657 9.58326 15.6559 9.58326 15.646C9.58326 15.6361 9.58127 15.6263 9.57743 15.6172C9.5736 15.6081 9.56798 15.5999 9.5609 15.593C9.54808 15.5782 9.53439 15.5642 9.5199 15.551L2.6459 8.67799C2.44479 8.48223 2.2564 8.27381 2.0819 8.054C1.90001 7.81613 1.74034 7.56206 1.6049 7.295C1.50651 7.10096 1.42132 6.90051 1.3499 6.69501C1.2809 6.49501 1.2289 6.295 1.1789 6.095C1.12932 5.87608 1.0959 5.65383 1.0789 5.43001C1.0581 5.16675 1.0581 4.90226 1.0789 4.63901C1.08611 4.55147 1.09779 4.46435 1.1139 4.37801C1.1419 4.20501 1.1629 4.02999 1.2049 3.85899C1.2469 3.68799 1.3049 3.504 1.3679 3.328C1.4112 3.2022 1.46092 3.07871 1.5169 2.95801C1.61167 2.75058 1.72094 2.55007 1.8439 2.358C2.20787 1.78758 2.68422 1.29728 3.2439 0.917007C3.41636 0.800427 3.59643 0.695515 3.7829 0.602997C3.9319 0.528997 4.0829 0.463 4.2379 0.403C4.38868 0.342482 4.54296 0.291065 4.6999 0.249008C4.8229 0.217008 4.9479 0.196001 5.0699 0.164001C5.27288 0.117082 5.47976 0.0889638 5.6879 0.0800018C5.97102 0.0564587 6.25579 0.0614835 6.5379 0.0950012C6.6119 0.105001 6.6869 0.110003 6.7609 0.119003C6.8159 0.127003 6.8709 0.135995 6.9239 0.147995C7.0669 0.179995 7.2089 0.212001 7.3509 0.248001C7.44273 0.267679 7.53323 0.293066 7.6219 0.324005C7.7999 0.393005 7.9799 0.457 8.1539 0.541C8.69296 0.791003 9.18117 1.1385 9.5939 1.56599C11.9099 3.88333 14.2266 6.20033 16.5439 8.517C16.5614 8.53612 16.5801 8.55416 16.5999 8.571C16.6126 8.58184 16.6287 8.5878 16.6454 8.5878C16.6621 8.5878 16.6782 8.58184 16.6909 8.571C16.7061 8.55863 16.7202 8.54491 16.7329 8.53L17.2509 8.01199C17.4119 7.84999 17.5739 7.68901 17.7349 7.52701C17.8269 7.43401 17.9149 7.339 18.0079 7.246C18.1859 7.069 18.3659 6.894 18.5449 6.718C18.7696 6.49467 18.9936 6.271 19.2169 6.047L19.7219 5.54201L20.1859 5.07899L20.6499 4.61501L21.1549 4.11L21.6389 3.62601L22.0749 3.19L22.5319 2.733L23.1199 2.146C23.2909 1.976 23.4609 1.804 23.6319 1.634C23.8206 1.43077 24.0245 1.24223 24.2419 1.07001C24.4199 0.939007 24.5979 0.806001 24.7869 0.692001C24.9659 0.580343 25.1551 0.485922 25.3519 0.410004C25.5369 0.342004 25.7189 0.258996 25.9079 0.201996C26.0969 0.144996 26.2739 0.113004 26.4589 0.076004C26.5669 0.055004 26.6779 0.0450059 26.7869 0.0310059C26.7864 0.0204388 26.7881 0.0098802 26.7919 0Z"
											fill="#E20101"
										/>
									</svg>
								) : (
									<svg
										viewBox="0 0 43 34"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M42.1695 6.16405C42.1495 6.19705 42.1166 6.22705 42.1105 6.26405C41.978 6.93484 41.638 7.54701 41.1385 8.01405C39.2799 9.86805 37.4229 11.724 35.5676 13.582C29.3675 19.782 23.1645 25.9847 16.9585 32.19C16.7361 32.4393 16.4675 32.643 16.1675 32.7901C16.0565 32.8371 15.9395 32.8721 15.8265 32.9151C15.6584 32.9748 15.481 33.0039 15.3025 33.0011C14.7986 32.9956 14.3127 32.8126 13.9305 32.4841C13.8344 32.4029 13.7426 32.3168 13.6556 32.226L2.07355 20.646C1.79216 20.3889 1.55826 20.0843 1.38255 19.746C1.27676 19.5064 1.18363 19.2614 1.10355 19.0121C0.989692 18.6153 0.966791 18.1979 1.03655 17.791C1.08668 17.4989 1.17546 17.2148 1.30055 16.946C1.49026 16.5358 1.76261 16.1692 2.10055 15.869C2.57555 15.405 3.03655 14.9261 3.51455 14.4691C3.8539 14.1461 4.26523 13.9086 4.71455 13.776C5.11841 13.6434 5.54585 13.598 5.96855 13.6431C6.63838 13.699 7.26926 13.9811 7.75755 14.4431C9.99555 16.6617 12.2289 18.886 14.4576 21.116L15.1745 21.8331C15.2885 21.9481 15.2965 21.9481 15.4085 21.8331L22.6545 14.5891C26.8505 10.3964 31.0466 6.20005 35.2425 2.00005C35.546 1.68718 35.9082 1.43738 36.3085 1.26505C36.5214 1.18796 36.7397 1.12679 36.9615 1.08205C37.0505 1.06005 37.0525 1.06805 37.0505 0.998047H37.9935C37.9626 1.07505 38.0275 1.06505 38.0655 1.07405C38.1715 1.10005 38.2795 1.11904 38.3855 1.14604C38.8808 1.27398 39.3335 1.53067 39.6975 1.89005C40.1875 2.36605 40.6729 2.84738 41.1535 3.33405C41.3171 3.49772 41.4675 3.67393 41.6035 3.86105C41.8415 4.18996 42.009 4.56443 42.0956 4.96104C42.1035 4.99704 42.0896 5.06105 42.1685 5.03505C42.1695 5.40905 42.1695 5.78705 42.1695 6.16405Z"
											fill="#78B508"
										/>
									</svg>
								)}
							</div>
							<p className="text-[0.65rem] lg:text-lg">
								Não possui pendência de cadastro
							</p>
						</fieldset>
					</div>
				</div>
				<div className="w-full h-[24%] rounded-2xl bg-base-green text-center p-2">
					<p className="text-xs text-white lg:text-base">Mais informações</p>
					<p className="text-xs text-white lg:text-base">{user.informations}</p>
				</div>
			</div>
		</>
	);
}
