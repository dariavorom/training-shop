import React from "react";

export const SvgGenerator = (props) => {
    switch (props.id) {
        case 'star':
            return (
                <svg className={props.className} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} onMouseOver={props.onMouseOver}>
                    <path
                        d="M7.95358 1.21972C8.28358 0.206625 9.71688 0.206625 10.0458 1.21972L11.2228 4.84092C11.2947 5.06146 11.4345 5.25362 11.6222 5.38994C11.8098 5.52626 12.0358 5.59975 12.2678 5.59993H16.076C17.1419 5.59993 17.5841 6.96392 16.7228 7.59093L13.6428 9.82833C13.4547 9.96476 13.3147 10.1572 13.2427 10.3782C13.1708 10.5991 13.1707 10.8371 13.2424 11.0581L14.4194 14.6793C14.7494 15.6924 13.5889 16.5361 12.7254 15.9091L9.64538 13.6717C9.45751 13.5353 9.23129 13.4619 8.99913 13.4619C8.76696 13.4619 8.54075 13.5353 8.35288 13.6717L5.27288 15.9091C4.41048 16.5361 3.25108 15.6924 3.57998 14.6793L4.75698 11.0581C4.82867 10.8371 4.82854 10.5991 4.75661 10.3782C4.68468 10.1572 4.54464 9.96476 4.35658 9.82833L1.27768 7.59203C0.416379 6.96503 0.859679 5.60103 1.92448 5.60103H5.73158C5.96373 5.60109 6.18995 5.5277 6.37785 5.39136C6.56576 5.25503 6.70571 5.06274 6.77768 4.84202L7.95468 1.22082L7.95358 1.21972Z"
                        fill={props.color}/>
                </svg>
            )
        case 'facebook' :
            return (
                <svg className={props.className} width={props.width} height={props.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8 8.04742C15.8 3.71232 12.3089 0.199951 8 0.199951C3.69113 0.199951 0.199997 3.71232 0.199997 8.04742C0.199997 11.9642 3.05234 15.2108 6.78125 15.7999V10.3159H4.7998V8.04742H6.78125V6.31844C6.78125 4.35183 7.94496 3.26552 9.72732 3.26552C10.5809 3.26552 11.4735 3.41868 11.4735 3.41868V5.3489H10.4897C9.521 5.3489 9.21875 5.95391 9.21875 6.57443V8.04742H11.382L11.036 10.3159H9.21875V15.7999C12.9477 15.2108 15.8 11.9642 15.8 8.04742Z" fill="white"/>
                </svg>

            )
        case 'twitter' :
            return (
                <svg className={props.className} width={props.width} height={props.height} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2969 1.84961C16.6851 2.12031 16.0312 2.30313 15.3422 2.3875C16.0453 1.96563 16.5867 1.29766 16.8398 0.503125C16.1824 0.893359 15.4547 1.17812 14.6777 1.3293C14.0555 0.664844 13.1695 0.25 12.1922 0.25C10.3113 0.25 8.78906 1.77578 8.78906 3.65664C8.78906 3.92383 8.81718 4.18398 8.87695 4.43359C6.04687 4.29297 3.53671 2.93594 1.85976 0.872266C1.56796 1.375 1.39921 1.96211 1.39921 2.58437C1.39921 3.76562 2.0039 4.80977 2.91796 5.42148C2.35546 5.40742 1.82812 5.25273 1.37109 4.99609V5.03828C1.37109 6.69062 2.54531 8.06523 4.10273 8.37813C3.81796 8.45547 3.51562 8.49766 3.20624 8.49766C2.98828 8.49766 2.77382 8.47656 2.5664 8.43437C2.99882 9.78789 4.25742 10.7723 5.74804 10.8004C4.58437 11.7145 3.11484 12.2594 1.51874 12.2594C1.24453 12.2594 0.973822 12.2418 0.706635 12.2102C2.20781 13.1875 3.99726 13.75 5.91679 13.75C12.1852 13.75 15.6094 8.55742 15.6094 4.05391C15.6094 3.90625 15.6059 3.75859 15.5988 3.61445C16.2633 3.13281 16.8398 2.53516 17.2969 1.84961Z" fill="white"/>
                </svg>
            )
        case 'instagram' :
            return (
                <svg className={props.className} width={props.width} height={props.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99999 5.65672C6.70976 5.65672 5.65683 6.70965 5.65683 7.99989C5.65683 9.29012 6.70976 10.3431 7.99999 10.3431C9.29023 10.3431 10.3432 9.29012 10.3432 7.99989C10.3432 6.70965 9.29023 5.65672 7.99999 5.65672ZM15.0277 7.99989C15.0277 7.02957 15.0365 6.06805 14.982 5.0995C14.9275 3.9745 14.6709 2.97606 13.8482 2.1534C13.0238 1.32899 12.0271 1.07411 10.9021 1.01961C9.93183 0.965122 8.9703 0.973912 8.00175 0.973912C7.03144 0.973912 6.06991 0.965122 5.10136 1.01961C3.97636 1.07411 2.97792 1.33075 2.15527 2.1534C1.33085 2.97782 1.07597 3.9745 1.02148 5.0995C0.966984 6.06981 0.975773 7.03133 0.975773 7.99989C0.975773 8.96844 0.966984 9.93172 1.02148 10.9003C1.07597 12.0253 1.33261 13.0237 2.15527 13.8464C2.97968 14.6708 3.97636 14.9257 5.10136 14.9802C6.07167 15.0347 7.0332 15.0259 8.00175 15.0259C8.97206 15.0259 9.93359 15.0347 10.9021 14.9802C12.0271 14.9257 13.0256 14.669 13.8482 13.8464C14.6727 13.022 14.9275 12.0253 14.982 10.9003C15.0383 9.93172 15.0277 8.9702 15.0277 7.99989ZM7.99999 11.6052C6.00487 11.6052 4.39472 9.995 4.39472 7.99989C4.39472 6.00477 6.00487 4.39461 7.99999 4.39461C9.99511 4.39461 11.6053 6.00477 11.6053 7.99989C11.6053 9.995 9.99511 11.6052 7.99999 11.6052ZM11.7529 5.08895C11.2871 5.08895 10.9109 4.71278 10.9109 4.24696C10.9109 3.78114 11.2871 3.40497 11.7529 3.40497C12.2187 3.40497 12.5949 3.78114 12.5949 4.24696C12.5951 4.35757 12.5734 4.46712 12.5311 4.56934C12.4888 4.67156 12.4268 4.76443 12.3486 4.84265C12.2704 4.92086 12.1775 4.98288 12.0753 5.02514C11.9731 5.06741 11.8635 5.08909 11.7529 5.08895Z" fill="white"/>
                </svg>
            )
        case 'pinterest' :
            return (
                <svg className={props.className} width={props.width} height={props.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0.125C3.65117 0.125 0.125 3.65117 0.125 8C0.125 11.2238 2.06563 13.9941 4.83945 15.2141C4.81836 14.6656 4.83594 14.0047 4.97656 13.407C5.12773 12.7672 5.98906 9.11445 5.98906 9.11445C5.98906 9.11445 5.73594 8.61172 5.73594 7.86992C5.73594 6.70273 6.41094 5.83086 7.25469 5.83086C7.97188 5.83086 8.31641 6.36875 8.31641 7.01211C8.31641 7.73281 7.85586 8.80859 7.62031 9.80703C7.42344 10.6437 8.03867 11.3223 8.86484 11.3223C10.3555 11.3223 11.3609 9.40625 11.3609 7.13516C11.3609 5.40898 10.1973 4.11875 8.08437 4.11875C5.69727 4.11875 4.20664 5.90117 4.20664 7.89101C4.20664 8.57656 4.41055 9.06172 4.72695 9.43437C4.87109 9.60664 4.89219 9.67695 4.83945 9.87383C4.80078 10.018 4.71641 10.366 4.67773 10.5066C4.625 10.707 4.46328 10.7773 4.28398 10.7035C3.18359 10.2535 2.67031 9.05117 2.67031 7.69414C2.67031 5.4582 4.5582 2.77578 8.29883 2.77578C11.3047 2.77578 13.284 4.95195 13.284 7.28633C13.284 10.3766 11.5648 12.6828 9.03359 12.6828C8.18281 12.6828 7.38477 12.2223 7.11055 11.702C7.11055 11.702 6.65352 13.516 6.55508 13.8676C6.38984 14.4758 6.06289 15.0805 5.76406 15.5551C6.4707 15.7625 7.21953 15.8785 7.99648 15.8785C12.3453 15.8785 15.8715 12.3523 15.8715 8.00351C15.875 3.65117 12.3488 0.125 8 0.125Z" fill="white"/>
                </svg>

            )
        case 'arrow' :
            return (
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 9L8 1.5L0.5 9" stroke="#9C9C9C"/>
                </svg>
            )
        default:
            return <svg> </svg>;
    }
}