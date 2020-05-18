<template>
    <div class="preloader">
        <svg id="Layer_1"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px"
             y="0px"
             width="24px"
             height="30px"
             viewBox="0 0 24 30"
             style="enable-background: new 0 0 50 50;"
             xml:space="preserve"
        >
            <rect x="0"
                  y="13"
                  width="4"
                  height="5"
                  fill="#3db9d3"
            >
                <animate attributeName="height"
                         attributeType="XML"
                         values="5;21;5"
                         begin="0s" dur="0.6s"
                         repeatCount="indefinite"
                />
                <animate attributeName="y"
                         attributeType="XML"
                         values="13; 5; 13"
                         begin="0s"
                         dur="0.6s"
                         repeatCount="indefinite"
                />
            </rect>
            <rect x="10"
                  y="13"
                  width="4"
                  height="5"
                  fill="#3db9d3"
            >
                <animate attributeName="height"
                         attributeType="XML"
                         values="5;21;5"
                         begin="0.15s"
                         dur="0.6s"
                         repeatCount="indefinite"
                />
                <animate attributeName="y"
                         attributeType="XML"
                         values="13; 5; 13"
                         begin="0.15s"
                         dur="0.6s"
                         repeatCount="indefinite"
                />
            </rect>
            <rect x="20"
                  y="13"
                  width="4"
                  height="5"
                  fill="#3db9d3"
            >
                <animate attributeName="height"
                         attributeType="XML"
                         values="5;21;5"
                         begin="0.3s"
                         dur="0.6s"
                         repeatCount="indefinite"
                />
                <animate attributeName="y"
                         attributeType="XML"
                         values="13; 5; 13"
                         begin="0.3s"
                         dur="0.6s"
                         repeatCount="indefinite"
                />
            </rect>
        </svg>
    </div>
</template>
<style lang="scss" scoped>
.preloader {

    position: absolute;

    top: 0;

    left: 0;

    z-index: 1;

    display: flex;

    align-items: center;

    justify-content: center;

    width: 100%;

    height: 100%;

    background: $white;

    transition: all 0.3 linear;
}
</style>
