<template>
  <div>
    <CCol >
      <CCard>
        <CCardHeader>
          <strong>Movie </strong><small>Form</small>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm ="5">
              <CInput
                label="Title"
                placeholder="title"
              />
            </CCol>
            <CCol sm="5">
              <CInput
                label="Japanese"
                placeholder="Japanese"
              />
            </CCol>
          </CRow>
          <CInput placeholder="Anime Poster image link">
            <template #prepend-content><CIcon name="cil-clipboard"/></template>
          </CInput>
          <CInput placeholder="Anime Cover image link">
            <template #prepend-content><CIcon name="cil-clipboard"/></template>
          </CInput>
        <CRow>
          <CCol sm="4">
            <CInput
              label="Status"
              placeholder="Enter anime Status"
            />
          </CCol>
          <CCol sm="4">
            <CInput
              label="Type"
              placeholder="Enter your anime type (eg: TV)"
            />
          </CCol>
          <CCol sm="4">
            <CInput
              label="Source"
              placeholder="Enter your anime Source (eg: Light novel)"
            />
          </CCol>
        </CRow>
          <CRow>
            <CCol sm="8">
              <CInput
                label="Genres"
                placeholder="Enter anime Genres (eg: Comedy,Drama,Romance,Ecchi)"
              />
            </CCol>
            <CCol sm="4">
              <CInput
                label="Duration"
                placeholder="Enter your anime duration (eg: 23 min)"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol sm="4">
              <CInput
                label="score"
                placeholder="eg (6.5)"
              />
            </CCol>
            <CCol sm="4">
              <CInput
                label="Producers"
                placeholder="Producers"
              />
            </CCol>
            <CCol sm="4">
              <CInput
                label="Studios"
                placeholder="Studios"
              />
            </CCol>
          </CRow>
          <CTextarea
            label="Review"
            placeholder="Content..."
            horizontal
            rows="5"
          />
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="success"><CIcon name="cil-check-circle"/> Submit</CButton>
        </CCardFooter>
      </CCard>
    </CCol>

  </div>

</template>
