const subStateAfterInit = (defaultData = null) => ({
  hasInit: false,
  isLoading: false,
  data: defaultData,
  error: null,
  status: null,
})

const subStateAfterRequest = () => ({
  hasInit: true,
  isLoading: true,
})

const subStateAfterSuccess = (data, status) => ({
  isLoading: false,
  data,
  status,
})

const subStateAfterFailure = (error, status) => ({
  isLoading: false,
  error,
  status,
})

export default {
  subStateAfterInit,
  subStateAfterRequest,
  subStateAfterSuccess,
  subStateAfterFailure,
}
