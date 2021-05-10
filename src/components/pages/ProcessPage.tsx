import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import ProcessCard from '../ProcessCard'
import '../../scss/components/pages/ProcessPage.scss'
import { PROCESS_LIST } from '../../graphql/query/process'
import { Loader } from '../Loader'
import { connect } from 'react-redux'
import { parseProcessList } from '../../redux/actions/process'
import { IAction, IProcess } from '../../interfaces'

interface ProcessProps {
  parseProcessList: (processList: Array<IProcess>) => IAction
  processList: Array<IProcess>
}

const renderCards = (processList: Array<IProcess>) => {
  return processList.map(card => {
    return (
      <ProcessCard
        key={card.id}
        name={card.name}
        numberOfExecutions={card.numberOfExecutions}
        averageLeadTime={card.averageLeadTime}
        averageActiveTime={card.averageActiveTime}
        employeesInvolvedProcess={card.employeesInvolvedProcess}
        numberOfScenarios={card.numberOfScenarios}
        start={card.start}
        end={card.end}
        loading={card.loading}
      />
    )
  })
}

const ProcessPage: React.FC<ProcessProps> = props => {
  const { data, loading, error } = useQuery(PROCESS_LIST)

  useEffect(() => {
    if (data) {
      props.parseProcessList(data.processList)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className="ProcessPage">
      {loading ? <Loader /> : renderCards(props.processList)}
      {error ? (
        <span style={{ color: 'red' }}>Произошла ошибка: {error.message}</span>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state: {
  process: { processList: Array<IProcess> }
}) => {
  return {
    processList: state.process.processList
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    parseProcessList: (processList: Array<IProcess>) =>
      dispatch(parseProcessList(processList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcessPage)
