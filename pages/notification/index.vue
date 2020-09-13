<template>
  <div>
    <CRow>
      <CCol sm="6" md="4">
        <CCard color="primary" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="success" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="info" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="warning" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="danger" body-wrapper text-color="white">
          {{loremIpsum}}
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <transition name="fade">
          <CCard v-if="show" color="secondary">
            <CCardHeader>
              Card with header actions
              <div class="card-header-actions">
                <CLink href="#" class="card-header-action btn-setting">
                  <CIcon name="cil-settings"/>
                </CLink>
                <CLink class="card-header-action btn-minimize" @click="isCollapsed = !isCollapsed">
                  <CIcon :name="`cil-chevron-${isCollapsed ? 'bottom' : 'top'}`"/>
                </CLink>
                <CLink href="#" class="card-header-action btn-close" v-on:click="show = false">
                  <CIcon name="cil-x-circle"/>
                </CLink>
              </div>
            </CCardHeader>
            <CCollapse :show="isCollapsed" :duration="400">
              <CCardBody>
                {{loremIpsum}}
              </CCardBody>
            </CCollapse>
          </CCard>
        </transition>
      </CCol>
    </CRow>

  </div>

</template>
