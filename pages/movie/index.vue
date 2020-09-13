<template>
  <div>
    <input type="text" name="" value="">
    <CCol sm="6" md="4">
      <CCard>
        <CCardHeader>
          Fukigen na Mononokean Tsuzuki
          <div class="card-header-actions">
            <a
              href="https://coreui.io/vue/docs/components/card-components"
              class="card-header-action"
              rel="noreferrer noopener"
              target="_blank"  >
              <small class="text-muted">TV</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          {{loremIpsum}}
        </CCardBody>
      </CCard>
    </CCol>

  </div>
</template>
<script>
export default {
  name: 'Cards',
  data: function () {
    return {
      show: true,
      isCollapsed: true,
      loremIpsum: 'Despite being burdened with crippling debt to the morose Haruitsuki Abeno, Hanae Ashiya has come to enjoy his job as an exorcist. '
    }
  }
}
</script>
