import {UserContext, ChannelContext} from '../App'

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div>
                    {user} learning ReactHooks with {channel} in YouTube.
                  </div>
                )
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}
export default ComponentC
